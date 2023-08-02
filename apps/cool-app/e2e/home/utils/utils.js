const {expect} = require('@playwright/test');

const homePageTest = async ({
    page,
}) => {
    await page.goto(`http://localhost:3000`);

    await page.waitForLoadState();
    //Meta Data tests
    await expect(page).toHaveTitle(/Create/i);
};

module.exports = {
    homePageTest,
};
