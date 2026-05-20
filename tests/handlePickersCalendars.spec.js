const {test, expect} = require('@playwright/test');

test('Handle Pickers/Calendars', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.fill('#datepicker','06/15/2022');
    await page.waitForTimeout(5000);

    const expectedDay = 6;
    const expectedMounth = 'June';
    const expectedYear = 2022;

    await page.click('#datepicker');
    
    while(true){
        var actualYear = await page.locator('.ui-datepicker-year').textContent();
        var actualmounth = await page.locator('.ui-datepicker-month').textContent();

        if(expectedMounth== actualmounth && expectedYear == actualYear){
            break;
        }

        await page.locator("a[title='Prev']").click();
        //await page.locator("a[title='Next']").click();

    }


    const alldays = await page.$$('.ui-datepicker-calendar td a');
/*
    for(const day of alldays){
        console.log(await day.textContent());
        
        if (await day.textContent()==expectedDay){
            await day.click();
            break;
        }
    }
*/

    await page.click(`//a[@class='ui-state-default'][text()='${expectedDay}']`);
    await page.waitForTimeout(5000);
        
    
    
})
