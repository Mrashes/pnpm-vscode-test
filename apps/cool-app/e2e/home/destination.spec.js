const {test} = require('@playwright/test');
const {homePageTest} = require('./utils');

test.describe('Home Tests', () => {
    test(`home page`, async ({page}) => {
        await homePageTest({page});
    });
});
