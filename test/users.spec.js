/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
// var app = require('../app');
// var agent = request.agent(app);
const db = require('../server/db')
// const app = require('../index')
const User = db.model('user')

    
describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/:id', () => {
    const catLadyEmail = 'catlady@gmal.com'

    beforeEach(() => {
      return User.create({
        email: catLadyEmail
      })
    })

    it('GET /api/users/:id', () => {
      return request(app)
        .get('/api/users/${catlady}')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(catLadyEmail)
        })
    })
    it('returns a 404 error if the ID is not correct', function () {
      
            return agent
            .get('/users/76146')
            .expect(404);
      
          });
    it('updates a user at PUT', () => {
      return request(app)
          .put(`/api/users/${catlady}`)
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
