import puppeteer from 'puppeteer';
jest.setTimeout(50000);

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-card');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-card .event-description');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event-card .show_details-button');

    const eventDetails = await page.$('.event-card .event-description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event-card .hide_details-button');

    const eventDetails = await page.$('.event-card .event-description');
    expect(eventDetails).toBeNull();
  });
});

//Bonus Task

describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.city');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {});

  test('User should see a list of suggestions when they search for a city.', async () => {
    await page.type('.city', 'London', { delay: 150 });
    const suggestion = await page.$('.suggestions');
    expect(suggestion).toBeDefined();
  });

  test('User can select a city from the suggested list.', async () => {
    await page.reload();
    await page.type('.city', 'London', { delay: 150 });
    await page.click('.suggestions li');
  });
});
