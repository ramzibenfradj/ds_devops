const request = require('supertest');
const app = require('./index');

describe('POST /post', () => {
  it('responds with text "This is a POST request"', async () => {
    const response = await request(app)
      .post('/post')
      .send({});

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('hello world!');
  });
});
