const {test, expect} = require('@playwright/test');

test('assertions',async({page})=>{
    page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    
    expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
    expect(page).toHaveTitle('nopCommerce demo store. Register')
    expect("img[alt='nopCommerce demo store']").toBeVisible();
   // expect('').toBeEnabled()
    //expect('').toBeDisabled()
    expect('#Newsletter').toBeChecked();
    expect('#register-button').toHaveAttribute('type','submit');

    expect('.page-tittle h1').toHaveText('Register');
    expect('.page-tittle h1').toContainText('Reg');

    page.locator('#Email').fill('test@email.test')
    expect('#Email').toHaveValue('test@email.test');

    //Soft assertions
    /*
    By default, failed assertion will terminate test execution. 
    Playwright also supports soft assertions: failed soft assertions do not 
    terminate test execution, but mark the test as failed.
    */

    expect.soft('.page-tittle h1').toHaveText('Register');


})