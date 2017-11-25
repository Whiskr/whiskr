/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
require('chai').use(require('chai-as-promised'))
// var app = require('../app');
const agent = require('supertest')(require('../server/index'))
const db = require('../server/db')
const app = require('../server/index')
const User = db.model('user')

    
describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/:id', () => {
    const catLadyEmail = 'catlady@gmal.com'
    const password = 'catscatscats'

    beforeEach(() => {
      return User.create({
        email: catLadyEmail,
        password: password
      })
    })

    it('GET /api/users/:id', () => {
      return request(app)
        .get('/api/users/${id}')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(catLadyEmail)
        })
    })
    it('returns a 404 error if the ID is not correct', function () {
      
            return request(app)
            .get('/users/76146')
            .expect(404);
      
          });
    it('updates a user at PUT', () => {
      return request(app)
          .put(`/api/users/${id}`)
          .send({
              email: 'catlady@hotmail.com'
          })
          .expect(201)
          .then(res => {
              return User.findById(catlady);
          })
          .then(user => {
              expect(user.email).to.be.equal('catlady@gmail.com');
          });
    })
    it('deletes a user at Delete', () => {
      return request(app)
          .delete(`/api/users/${catlady}`)
          .send({
              email: 'catlady@hotmail.com'
          })
          .expect(201)
          .then(res => {
              return User.findById(catlady);
          })
          .then(user => {
              expect(user.email).to.be.equal('catlady@gmail.com');
          });
    })
  }) 
});
