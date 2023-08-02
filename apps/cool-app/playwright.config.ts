const {devices} = require('@playwright/test');
const path = require('path');

const baseURL = 'localhost:3000';

const ciCdProjects = [
    {
        name: 'Desktop Chrome',
        use: {
            ...devices['Desktop Chrome'],
        },
    },
    {
        name: 'Mobile Chrome',
        use: {
            ...devices['Pixel 5'],
        },
    },
];

const localProjects = [
    ...ciCdProjects,
    {
        name: 'Desktop Safari',
        use: {
            ...devices['Desktop Safari'],
        },
    },
    {
        name: 'Mobile Safari',
        use: devices['iPhone 12'],
    },
    {
        name: 'Desktop Firefox',
        use: {
            ...devices['Desktop Firefox'],
        },
    },
    {
        name: 'Desktop Safari',
        use: {
            ...devices['Desktop Safari'],
        },
    },
    {
        name: 'Mobile Safari',
        use: devices['iPhone 12'],
    },
];

//TODO tweak for local runs
let projects = ciCdProjects;

// Reference: https://playwright.dev/docs/test-configuration
const config = {
    // Timeout per test
    timeout: 30 * 1000,
    // Test directory
    testDir: path.join(__dirname, 'e2e'),
    // If a test fails, retry it additional 2 times
    retries: 2,
    // Artifacts folder where screenshots, videos, and traces are stored.
    outputDir: 'test-results/',

    // Run your local dev server before starting the tests:
    // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
    webServer: {
        command: 'npm run start',
        url: baseURL,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },

    use: {
        // Use baseURL so to make navigations relative.
        // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
        baseURL,

        // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
        // More information: https://playwright.dev/docs/trace-viewer
        trace: 'retry-with-trace',

        // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
        // contextOptions: {
        //   ignoreHTTPSErrors: true,
        // },
    },

    projects,
};
module.exports = config;
