const {test, expect} = require('@playwright/test');

test.skip('Mouse Hover', async({page})=>{
    await page.goto('https://demo.opencart.com/');

    const desktops = await page.locator('//a[normalize-space()="Desktops"]');
    const macs = await page.locator('//a[normalize-space()="Mac (1)"]');

    await desktops.hover();
    await macs.hover();
    await page.waitForTimeout(5000);
})


test('context clicks', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const contextMenu = await page.locator('.context-menu-one.btn.btn-neutral');
    
    await contextMenu.click({contextMenu:'right'});
    
    await page.waitForTimeout(5000);
})

test('Doble clicks', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const field1 = await page.locator('#field1');
    const field2 = await page.locator('#field2');
    const copuTextButton = await page.locator("button[ondblclick='myFunction1()']");

    await field1.fill('This text should be copy in field 2')

    await copuTextButton.dblclick();

    await expect(field2).toHaveValue('This text should be copy in field 2');
    
    await page.waitForTimeout(5000);
})

test('Drag and drop', async({page})=>{
    await page.goto('https://cdpn.io/EpsilonDeltaCriterion/fullpage/jLoPgE?anon=true&view=');

    const iframeGoodies = await page.frameLocator('#result');
    const oslo = await iframeGoodies.locator('#box1');
    const norway = await iframeGoodies.locator('#box101');
    //Approach 1
    await oslo.hover();
    await page.mouse.down();
    
    await norway.hover();
    await page.mouse.up()
    await page.waitForTimeout(5000);
    
    const madrid = await iframeGoodies.locator('#box7');
    const spain = await iframeGoodies.locator('#box107');

    //Approach 2
    await madrid.dragTo(spain);
    await page.waitForTimeout(5000);
})