// @ts-check
import { test, expect } from '@playwright/test';

test.only('has titleonly one', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');

});

test.beforeAll('has titleonly one', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');

});


test.beforeEach('has titleonly one', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');

});

test.afterAll('has titleonly one', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');

});

test.afterEach('has titleonly one', async ({ page }) => {
  await page.goto('https://www.microsoft.com/es-co/microsoft-teams/log-in');
  
  let pageURL = page.url();
  console.log('Page url is: ',pageURL);

  await expect(page).toHaveURL('https://www.microsoft.com/es-co/microsoft-teams/log-in');

});