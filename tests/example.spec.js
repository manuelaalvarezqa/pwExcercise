// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');



});

