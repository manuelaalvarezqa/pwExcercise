const {test, expect} = require('@playwright/test');
const { fileURLToPath } = require('node:url');
/*
test('Inputboxes, Radio buttons and Checkboxes', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameInput = await page.locator('#name');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toBeEmpty();
    await expect(nameInput).toBeEditable();
    await nameInput.fill("Manuela");
    
    const femaleRadioButton = await page.locator('#female');
    const maleRadioButton = await page.locator('#male');
    await femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();
    //await expect(
    console.log(await femaleRadioButton.isChecked());
    console.log(await maleRadioButton.isChecked());
    //.toBeTruthy();
    //await expect(maleRadioButton).isChecked().toBeFalsy();
    await expect(await femaleRadioButton.isChecked()).toBeTruthy();
    await expect(await maleRadioButton.isChecked()).toBeFalsy();

    //Checkboxes is the same that radiobuttons
    //Puts all the locators of the checkbozes in a array and for cicle

    page.close();
})

test('Handle DropDowns',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropDown = await page.locator('#country');
    const dropDownContent = await page.locator('#country').textContent();
    const dropDownOptionsDolarSign = await page.$$('#country option');
    const dropDownOptionsLocator = await page.locator('#country option');
    
    await expect(dropDownContent.includes('Japan')).toBeTruthy();
    await dropDown.selectOption({label:'Japan'}); //Label
    await page.waitForTimeout(2000);
    
    
    await expect(dropDownContent.includes('Japan')).toBeTruthy();
    await dropDown.selectOption({value:'india'}); //property Value
    await page.waitForTimeout(2000);
    
    let status = false;
    for (const op of dropDownOptionsDolarSign){
        let ActualContry = await op.textContent();
        if(ActualContry.includes('China')){
            status=true;
            break;
        }
    }
    await expect(status).toBeTruthy();
    await dropDown.selectOption('China'); //Visible text
    await page.waitForTimeout(2000);
    
    await dropDown.selectOption({index:0}); //Index
    await page.waitForTimeout(2000);
    
    await page.selectOption('#country','France'); //Index
    await page.waitForTimeout(2000);
    
    await expect(dropDownOptionsLocator).toHaveCount(10)
    await expect(dropDownOptionsDolarSign.length).toBe(10)
    
    console.log(dropDownOptionsDolarSign)
    console.log(dropDownOptionsLocator)
    console.log(dropDownOptionsDolarSign.length)
    console.log(dropDownOptionsLocator.length)
    
    
    
})

test('Handle multiSelect DropDowns',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors',['Blue','Yellow']);
    
    const dropDownOptionsLocator = await page.locator('#colors option');
    await expect(dropDownOptionsLocator).toHaveCount(5)
    
    //$$ gives js array 
    const dropDownOptionsDolarSign = await page.$$('#colors option');
    await expect(dropDownOptionsDolarSign.length).toBe(5)
    
    const dropDownContent = await page.locator('#colors').textContent();
    await expect(dropDownContent.includes('Blue')).toBeTruthy();

})*/

test('Bootstrap multiSelect DropDowns',async ({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Bootstrap-4-Multi-Select-BsMultiSelect/');
    await page.locator('.dashboardcode-bsmultiselect').click();
    
    const options = await page.locator("ul[class='dropdown-menu']>li");
    const optionsDolar = await page.$$("ul[class='dropdown-menu']>li");
    await expect(options).toHaveCount(51)
    //Can be validate with $$ too
    
    for(let op of optionsDolar){
        const value = await op.textContent();
        if (value.includes('Alabama') || value.includes('Maine')){
            await op.click();
        }
        
    }
    
    await page.waitForTimeout(5000);


    //Auto suggest or auto complete dropdrowns
    //await page.waitForSelector();
    // and later is the same


})

test('Hidden items in DropDowns',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/logins")
    await page.getByPlaceholder('username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click();
    
    await page.locator("//span[normalize-space()='PIM']").click();
    
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    await page.waitForTimeout(3000);
    const options = await page.$$("//div[@role='listbox']//span");
    for(let o of options){
        var textOption = await  o.testContent();
        console.log(textOption);
    }
})

/*Modification */