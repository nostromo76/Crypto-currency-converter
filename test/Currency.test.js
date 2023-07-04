const { Builder, Select } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
const CurrencyPage = require('../pages/BasePage.js')
const assert = require('assert');

const path = require('path');

const relativePath = "../index.html";
const absoluteFilePath = path.resolve(__dirname, relativePath);
const fileUrl = `file://${absoluteFilePath}`;

describe('Test Currency converter', async function () {
    let driver;
    let CurrencyConverter
    beforeEach('Open Currency converter', async function () {
        driver = new Builder().forBrowser('chrome').build()
        CurrencyConverter = new CurrencyPage(driver)

    })
    afterEach('Close browser', function () {
        // CurrencyConverter.closeBrowser();
    })
    it('Open page', async function () {
        await CurrencyConverter.visit(fileUrl)

    })
    it('Test page title ', async function () {
        await CurrencyConverter.getTitle()
        assert.ok('title', 'Crypto-currency-converter/index.html')

    })
    it('test headline h1', async function () {
        await CurrencyConverter.visit(fileUrl);
         //await driver.manage().window().maximize();
        const title = await driver.findElement(By.css('h1'));
        const text = await title.getText();
        assert.ok(text.includes('Cryptocurrency Rates Calculator'));
    })
    it('Test Label Currency ', async function () {
        await CurrencyConverter.visit(fileUrl);
        const label = await driver.findElement(By.xpath('//label[text()="Currency"]'));
        assert('label', 'Currency');
    })

    it('Test choosing currency by option', async function () {
        await CurrencyConverter.visit(fileUrl);
        
            let select = await driver.findElement(By.id('currency'));
            let currency = new Select(select);
            currency.selectByValue("USD");
            let selectedOption = await currency.getSelectedOption();
            assert.equal(await selectedOption.getAttribute("value"), "USD");
            });

        })





            
            




        

 
        })
 
   