import { test, expect } from '@playwright/test';

test('POST creates a new post', async ({ request }) => {

    const response = await request.post('/posts', {
        data: {
            title: 'Playwright API test',
            body: 'Created from automated test',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toMatchObject({
        title: 'Playwright API test',
        body: 'Created from automated test',
        userId: 1
    });

    expect(body.id).toBeDefined();
});