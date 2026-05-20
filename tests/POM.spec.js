/*
Elements are duplicated in the test cases
Change the elements

For every page, is created one page object clases

Separate elements and actions
*/

const {test, expect} = require('@playwright/test');
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';

test('POM', async({page})=>{

    //Loguin
    const loguin = new loginPage(page);
    await loguin.gotoLoginPage();
    await loguin.login('pavanol','test@123');

    await page.waitForTimeout(3000);

    //Home
    const home = new homePage(page);
    await home.addProductToCard('Sony xperia z5');
    await home.gotoCart();
    await page.waitForTimeout(3000);

    //Cart
    const cart = new cartPage(page);
    await page.waitForTimeout(3000);
    const isICard = await cart.checkProdInCart('Sony xperia z5');
    console.log(isICard);
    //expect(await isICard).toBe(true);

})