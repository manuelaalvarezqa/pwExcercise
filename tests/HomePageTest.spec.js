const { test, expect } = require( '@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  let pageT = page.title();
  console.log('Page title is: ',pageT);

  await expect(page).toHaveTitle('STORE');

  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  console.log('Page title is: ',pageT);

  console.log('Page url is: ',pageURL);
  
  await page.close();
});
