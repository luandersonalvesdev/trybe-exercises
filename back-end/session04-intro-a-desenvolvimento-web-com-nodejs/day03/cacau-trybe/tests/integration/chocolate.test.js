const chai = require('chai');
const app = require('../../src/app');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const fs = require('fs');

chai.use(chaiHttp);
const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});


describe('Testando a API Cacau Trybe', function () {
  this.beforeEach(function() {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
    
  });

  this.afterEach(function() {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const res = await chai.request(app).get('/chocolates');
      expect(res.status).to.be.equal(200);
      expect(res.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai.request(app).get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai.request(app).get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total para buscar a quantidade de chocolates', function() {
    it('Retorna o resultado 4 com status 200', async function() {
      const res = await chai.request(app).get('/chocolates/total/');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal({ "totalChocolates": 4 });
    });
  });

  describe('Usando o método GET em /chocolates/search? para buscar por um termo específico', function() {
    it('Retorna o resultado correto se houver.', async function() {
      const res = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal([
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]);
    });

    it('Retorna o resultado correto se houver.', async function() {
      const res = await chai.request(app).get('/chocolates/search?name=ZZZ');

      expect(res.status).to.be.equal(404);
      expect(res.body).to.be.deep.equal([])
    });
  });

  describe('Usando o método PUT em /chocolates para atualizar um dado específico', function() {
    it('Retorna o dado já atualizado caso haja.', async function() {
      sinon.stub(fs.promises, 'writeFile');
      const res = await chai.request(app).put('/chocolates/1').send({ name: "Mint Pretty Good", brandId: 2 });

      expect(res.status).to.be.equal(200);
      expect(fs.promises.writeFile.called).to.be.equal(true);
      expect(res.body).to.be.deep.equal({
        chocolate: {
          "id": 1,
          "name": "Mint Pretty Good",
          "brandId": 2,
        }
      });
    });

    it('Retorna o uma mensagem de erro caso não haja.', async function() {
      const res = await chai.request(app).put('/chocolates/555');

      expect(res.status).to.be.equal(404);
      expect(res.body).to.be.deep.equal({ "message": "chocolate not found" });
    });
  });
});