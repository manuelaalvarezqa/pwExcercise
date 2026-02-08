const {test, expect} = require('@playwright/test');

test('Handle pagination table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Total # of row and columns
    const table = await page.locator('#productTable');
    const columns = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');
    console.log(await columns.count());
    console.log(await rows.count());

    //Select a particular element
    /*const rowP4 = rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
    })*/

    //select multiple products with function
    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Tablet');
    await selectProduct(rows,page,'Wireless Earbuds');

    //await rowP4.locator('input').check();

    //4 print all the product details
    /*for (let i = 0 ; i < await rows.count(); i++)
    {
        let row = rows.nth(i);
        let tds = row.locator('td');

        for(let j=0; j< await tds.count();j++)
        {   
            let productInfo =
            await tds.nth(j).textContent();
            console.log(productInfo )
        }

    }*/

    const productsPages = await page.locator('.pagination li a');
    console.log(await productsPages.count());
    for (let p = 0 ; p < await productsPages.count(); p++)
    {
        //console.log('start first for cicle')
        if(p>0){
        await productsPages.nth(p).click();
        }
        await page.waitForTimeout(4000);
        for (let i = 0 ; i < await rows.count(); i++)
        {
          //  console.log('start second for cicle')
         let row = rows.nth(i);
         let tds = row.locator('td');

            for(let j=0; j< await tds.count();j++)
                {   
            //        console.log('start third for cicle')
                    let productInfo =
                    await tds.nth(j).textContent();
                    console.log(productInfo )
                }

    }
    }

    await page.waitForTimeout(4000);
    await page.close();
})

async function selectProduct(rows,page, name){
     const matchRow = rows.filter({
    has: page.locator('td'),
    hasText: name
    })
    await matchRow.locator('input').check();
}