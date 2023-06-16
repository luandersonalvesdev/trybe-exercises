const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando rota padrao "/"', () => {
  it('Se está saudável', async () => {
    const res = await chai.request(app).get('/');

    expect(res.status).to.be.equal(200);
  });
});