const {expect} = require('chai')
const request = require('supertest')
require('chai').use(require('chai-as-promised'))
// var app = require('../app');
const agent = require('supertest')(require('../server/index'))
const db = require('../server/db')
const app = require('../server/index')
const User = db.model('user')
const Match= db.model('match')

describe('User routes', () => {

  beforeEach(() => {
    return db.sync({ force: true })
  });

  describe('/api/users', () => {

    beforeEach(() => {
      return User.create({
        email: 'cat@gmail.com',
        password: 'cat'
      })
      .then(newUser => {
        return User.create({
          email: 'dog@gmail.com',
          password: 'god'
        })
      })
    })

     it('GET /api/user/:id shows a single user', (done) => {
      request(app)
        .get('/api/users/2')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.id).to.equal(2);
          expect(res.body.name).to.equal('Speck');
          done();
        })
    })

    it('GET /api/cats/:id return null if no cat id is passed in', (done) => {
      request(app)
        .get('/api/cats/34')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.null;
          done();
        })
    })

    it('PUT /api/cats/:id updates a cats information', () => {
        return agent
        .put('/api/cats/2')
        .send({
            password:eat
        })
        .expect(200)
        .expect(function(res) {
            expect(res.body.updatedResponse.id).to.not.be.an('undefined');
            expect(res.body.updatedResponse.gender).to.equal('male');
            expect(res.body.updatedResponse.status).to.equal('adopted');
        });
     })

    it('DELETE /api/cats/:id removes a cat', () => {
        return agent
        .delete('/api/cats/1')
        .expect(200)
        .then(res => {
            User.findById(1)
            .then(function(destroyed) {
            expect (destroyed).to.be.null;
            })
        })
        })


  })
})