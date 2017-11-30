const {expect} = require('chai')
const request = require('supertest')
require('chai').use(require('chai-as-promised'))
// var app = require('../app');
const agent = require('supertest')(require('../server/index'))
const db = require('../server/db')
const app = require('../server/index')
const User = db.model('user')
const Match= db.model('match')

describe('match routes', () => {
    beforeEach(() => {
        return db.sync({force: true})
})
describe('api/match/', () => {
    let testpetId1 = 6
    let testpetId2 = 8
    let testpetId3 = 10
    let testuserId1 = 5
    let userNoPets = 9

    let user1match1;
    let user1match2;
    let user1match3;
beforeEach (() => {
    Match.create({
        userId: testuserId1,
        petId: testpetId1
    })
    .then(newMatch => {
        user1match1 = newMatch.id
    })

    Match.create({
        userId: testuserId1,
        petId: testpetId2
    })
    .then(newMatch => {
        user1match2 = newMatch.id
    })

    Match.create({
        userId: testuserId1,
        petId: testpetId3
    })
    .then(newMatch => {
        user1match3 = newMatch.id
    })
})
    it('GETs all the user matches by Id', ()=> {
        return request(app)
        .get(`/api/match/${testuserId1}`)
        .expect(200)
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(3);
        })
    })

    
    
})
})
