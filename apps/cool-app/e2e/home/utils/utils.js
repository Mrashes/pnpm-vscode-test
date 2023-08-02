const {expect} = require('@playwright/test');

const homePageTest = async ({
    page,
}) => {
    await page.goto(`/`);

    await page.waitForLoadState();
    //Meta Data tests
    await expect(page).toHaveTitle(/Create/i);

    await page.locator('p', {hasText: 'Find in-depth information about Next.js features and API.'}).toBeVisible()
};

module.exports = {
    homePageTest,
};
