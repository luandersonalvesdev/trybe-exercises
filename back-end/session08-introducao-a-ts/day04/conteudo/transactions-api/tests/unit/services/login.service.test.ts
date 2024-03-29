import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  
  describe('#verifyLogin', function () {
    it('ao não receber um e-mail, retorne um erro', async function() {
          // Arrange
    const parameters = loginMock.noEmailLoginBody;

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' }); 
    });

    it('ao não receber um e-mail, retorne um erro', async function() {
      // Arrange
    const parameters = loginMock.noEmailLoginBody;

    // Act
    const serviceResponse = await loginService.verifyLogin(parameters);

    // Assert
    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' }); 
    });
  });
});