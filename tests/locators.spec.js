import { test, expect } from "@playwright/test";  

test('Locators',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

//    await expect(page.waitForSelector("//div[@id='tbodyid']//h4/a", {state: 'attached',strict:false });
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const listProducts = ["Samsung galaxy s6","Nokia lumia 1520"];

    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    console.log(products)
    console.log(listProducts)
    for (const product of products){
        const productName = await product.textContent();
        console.log(productName)
        if (listProducts[0] == productName){
            console.log("El producto esperado es: " + listProducts[0])
            await expect(productName).toEqual(listProducts[0])
        }
        if (listProducts[1] == productName){
            console.log("El producto esperado es: " + listProducts[1])
            //await expect(productName).toEqual(listProducts[0])
            await expect(productName).toEqual(listProducts[1])
        }
    }

   /*
    //Locate the element by Property
    await  page.click('id=login2');
    //await page.locator('id=login2').click();

    //Provide userName - CSS
    //await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername','pavanol')
    await page.fill('#loginusername','pavanol')

    await page.fill('#loginpassword','test@123')

    await page.click("//button[normalize-space()='Log in']")

    let logOutLink = await page.locator('#logout2');

    await expect(logOutLink).toBeEnabled();
/*
    const links = page.$$('a')
    for (const link of links){
        let linkText = link.textContent();
        console.log(linkText)
    }*/

//page.waitForTimeout(5000)
   

 //  await page.close()*/

})

test('Built-inLLocators',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/logins")
    
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click();

    await expect( await page.getByText('vishwas dsadsasdfs')).toBeVisible();
    



})