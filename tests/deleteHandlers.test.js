// eslint-disable-next-line no-undef
const config = require('../config');

const orderIdToDelete = 2; // Replace with a valid kit ID

describe('DELETE /api/v1/kits/:id endpoint tests', () => {
    test('DELETE status code should be 200 on success', async () => {
        const response = await fetch(`${config.API_URL}/api/v1/kits/${orderIdToDelete}`, {
            method: 'DELETE'
        });

        expect(response.status).toBe(200);
    });

    test('DELETE response should be empty (or contains expected confirmation)', async () => {
        const response = await fetch(`${config.API_URL}/api/v1/kits/${orderIdToDelete}`, {
            method: 'DELETE'
        });

        const responseData = await response.json();

        // Updated assertion
        expect(responseData).toEqual({ ok: true }); 
    });
});