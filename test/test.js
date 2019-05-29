const request = require('supertest');

const app = require('../index.js');

describe('GET /',()=>{
    it('responds with hello world',  (done)=>{

        //navigate to root and check the response

        request(app).get('/').expect('hello world', done);
    })
})