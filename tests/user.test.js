const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Bojangles',
      email: 'Bo@jangles.com',
      password: 'JerryJeff543',
    })
    .expect(201);
});
