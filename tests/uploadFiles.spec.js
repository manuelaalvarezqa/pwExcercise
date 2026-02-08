const {test, expect} = require('@playwright/test');

test('one File', async({page})=>{

    await page.goto('https://formstone.dev/components/upload/demo/');

    //await page.locator("(//div[@class='fs-upload-target'][normalize-space()='Drag and drop files or click to select'])[1]").setInputFiles('tests/uploadFiles/Notas.txt');
    //await page.locator("(//div[@class='fs-upload-target'][normalize-space()='Drag and drop files or click to select'])[1]").click();
    
    await page.locator("(//input[@type='file'])[1]").setInputFiles('tests/uploadFiles/Notas.txt');
    
    const files = await page.$$("//span[@class='file']");
    for(const f of files){
        console.log(await f.textContent());
    };
    //await expect(files).toHaveText('Notas.txt')
    //expect(await page.locator("(//ol[@class='filelist complete'])[1]")).toHaveText('Notas.txt');
    
    //Multiple files
    await page.locator("(//input[@type='file'])[2]")
    .setInputFiles(['tests/uploadFiles/Notas.txt',
        'tests/uploadFiles/destination-b2-gramm-vocab-1.pdf']);
        
    //const files2 = await page.locator("//span[@class='file']");
    //console.log(await files2.textContent());
    //expect(await page.locator("(//ol[@class='filelist complete'])[2]")).toHaveText('Notas.txt');
    //expect(await page.locator("(//ol[@class='filelist complete'])[2]")).toHaveText('destination-b2-gramm-vocab-1.pdf');
    await page.waitForTimeout(5000);
    page.close();


    /* 
    Remove
    await page.locator("(//input[@type='file'])[2]")
    .setInputFiles([]);
    
    */
})