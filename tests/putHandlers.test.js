// eslint-disable-next-line no-undef
const config = require('../config');

const orderIdToUpdate = 3; // Replace with the actual ID of a kit to update
const updatedProductList = [
    {
        "id": 1,
        "quantity": 3 // Update quantity of product 1 to 3
    },
    {
        "id": 2,
        "quantity": 1 // Add product 2 with quantity 1 (assuming it wasn't there before)
    }
];

describe('PUT /api/v1/kits/:id endpoint tests', () => { 
    test('PUT status code should be 200 on update', async () => { 
        const response = await fetch(`${config.API_URL}/api/v1/kits/${orderIdToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ kitinput: updatedProductList }) // Wrap product list in kitinput
        });

        expect(response.status).toBe(200);
    });

    test('PUT response should confirm successful update', async () => {
        const response = await fetch(`${config.API_URL}/api/v1/kits/${orderIdToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ kitinput: updatedProductList })
        });

        const responseData = await response.json(); 

        expect(responseData.ok).toBe(true); // Assert presence of "ok: true" property
    });
});
