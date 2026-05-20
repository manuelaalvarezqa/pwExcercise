// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('Enter to microsoft teams', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);
  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  const pagePromise = context.waitForEvent('page');
  await page.click('#action-oc21be');

  const newPage = await pagePromise;
// Interact with the new page normally
  let newPageURL = newPage.url();
  console.log('Page new url is: ',newPageURL);



  //await page.fill('id=i0116','tuxedo309@hotmail.com')
  
});

