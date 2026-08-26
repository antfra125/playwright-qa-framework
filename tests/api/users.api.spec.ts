import { test, expect } from '@playwright/test';

test('GET user returns correct user data', async ({ request }) => {

    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toMatchObject({
        
        id: 1,
        username: 'Bret',
        email: 'Sincere@april.biz'
    });
});

test('GET non-existing user returns 404', async ({ request }) => {

    const response = await request.get('/users/99');

    expect(response.status()).toBe(404);

    const body = await response.json();

    expect(body).toEqual({});
});