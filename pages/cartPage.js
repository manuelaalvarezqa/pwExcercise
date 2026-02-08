exports.cartPage =
class cartPage{
    constructor(page){
        this.page = page;
        this.prodInCartL = "//tr[@class='success']/td[2]";
    }

    async checkProdInCart(productName){
        const allProds = await this.page.$$(this.prodInCartL);
        for(const p of allProds){
            const actualProdName = p.textContent();
            console.log(actualProdName);
            if (productName === actualProdName){
                return true;
                break;
            }
        }
    }
}