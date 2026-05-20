import { test, expect } from '@playwright/test';


test.describe('Screenshoots',()=>{
    
    test('page screenshoot', async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.screenshot({path:'tests/screenshots'+Date.now()+'Homepage.png'});
    });
    
    test('Full page screenshot', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.screenshot({path:'tests/screenshots'+Date.now()+'HomepageFull.png',fullPage:true});
    });
    
    test('Element screenshot', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator("(//img[@alt='orangehrm-logo'])[2]").screenshot({path:'tests/screenshots'+Date.now()
            +'HomepageElement.png'
            });
    });

    /* 
    In the configuration search for the "use" option and put in 
    screenshot:'on'
    This are store in test-results path
    */
})


test.describe.only('Video recording',()=>{

     /* 
    In the configuration search for the "use" option and put in 
    video:'retain on failure'
    or 'on' or 'off'
    This are store in test-results path

    There is trace too
    This is a step to step of the execution with a high level of detail
    */


test('', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator("(//img[@alt='orangehrm-logo'])[2]")).toBeVisible();
});

test('Test 4', async ({ page }) => {
  console.log('This is test 4')
});
})