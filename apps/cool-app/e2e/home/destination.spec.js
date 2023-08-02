const {test} = require('@playwright/test');
const {homeTest} = require('./utils');

test.describe('Home Tests', () => {
    test(`home page`, async ({page}) => {
        await homeTest({page});
    });
});
