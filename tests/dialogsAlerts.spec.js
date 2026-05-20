const {test, expect} = require('@playwright/test');

test.skip('Handle alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling alert handling
    page.on('dialog', async (dialog)=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept(); 
    })

    await page.click('#alertBtn');
    await page.waitForTimeout(4000);
    await page.close();
})

test.skip('Confirmation dialog box', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling alert handling
    page.on('dialog', async (dialog)=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //accept to clouse with Ok button, dismiss with cancel button
        //await dialog.accept(); 
        await dialog.dismiss(); 
    })

    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(4000);
    await page.close();
})

test('Prompt Dialog', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Enabling alert handling
    page.on('dialog', async (dialog)=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        //accept to clouse with Ok button, dismiss with cancel button
        await dialog.accept('Manuela Alvarez'); 
        //await dialog.dismiss(); 
    })

    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toHaveText('Hello Manuela Alvarez! How are you today?')
    await page.waitForTimeout(4000);
    await page.close();
})