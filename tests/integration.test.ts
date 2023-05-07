import { prisma } from '@prisma/client';
import supertest from 'supertest';
import app from '../src/app';
import client from '../src/database/database';

afterAll(() => {
  client.$disconnect;
});

describe('Testing POST /recipes', () => {
  it('Tries to create a recipe with empty body and without authorization', async () => {
    const result = await supertest(app).post('/recipes').send({});

    expect(result.status).toEqual(422);
  });
});
