import sinon from 'sinon';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () {

  beforeEach(function() { sinon.restore(); });

  it('ao nao receber um e-mail, retorn um erro.', async function () {
    //ARRANGE
    const httpRequestBody = loginMock.noEmailLoginBody;

    // ACT
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // ASSERT
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({message: 'Dados inválidos'});
  });

  it('ao nao receber uma senha, retorn um erro', async function() {
    // ARRANGE
    const httpRequestBody = loginMock.noPasswordLoginBody;

    // ACT
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({message: 'Dados inválidos'});
  });

  it('ao receber um e-mail inexistente, retorne um erro.', async function() {
    // ARRANGE
    const httpRequestBody = loginMock.notExistingUserBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    // ACT
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({message: 'E-mail ou senha inválidos'});
  });

  it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.existingUserWithWrongPasswordBody 
    /* Esta linha será responsável por definir um valor derivado de loginMock.existingUser
    que é compatível com o tipo esperado como retorno da função `findOne()`  */
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    /* Aqui utilizamos o valor de mockFindOneReturn pois ele é compatível com o retorno da função `findOne()` */
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
    // Arrange
    const httpRequestBody = loginMock.validLoginBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});