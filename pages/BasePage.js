class BasePage {
    constructor(driver) {
        this.driver = driver
    }
    async visit(url) {
        await this.driver.get(url);

    }
    async getTitle() {
        return this.driver.getTitle();
    }
    async closeBrowser() {
        await this.driver.quit()
    }
    async findByCss(cssSelector) {
        return this.driver.findElement(By.css(cssSelector));
}





}
module.exports = BasePage