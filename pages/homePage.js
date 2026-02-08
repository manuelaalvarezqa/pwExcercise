exports.homePage = 
class homePage {
    constructor(page){
        this.page = page;
        this.productList = "//h4[@class='card-title']/a";
        this.addProductButton = '.btn.btn-success.btn-lg';
        this.listAdded = '#cartur';
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async addProductToCard(productName){
       const products = await this.page.$$(this.productList);
       for(const p of products){
            
        if ( productName === await p.textContent()){
            
            console.log(p.textContent());
            await p.click();
            await this.page.waitForTimeout(3000);
            break;
        }
       }
       await this.page.on('dialog', async (dialog)=>{
            if(dialog.message().includes('Product added')){
                await dialog.accept();
            }
       })

       await this.page.locator(this.addProductButton).click();
    }

    async gotoCart(){
        await this.page.locator(this.listAdded).click();
    }
}