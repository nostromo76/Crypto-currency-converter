const { Builder, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');
const CurrencyPage = require('../pages/BasePage.js')
const assert = require('assert');
require('dotenv').config();

const path = require('path');

const relativePath = "../index.html";
const absoluteFilePath = path.resolve(__dirname, relativePath);
const fileUrl = `file://${absoluteFilePath}`;

describe('Test Currency converter', async function () {
    let driver;
    let CurrencyConverter
    let options = new Options();
    beforeEach('Open Currency converter', async function () {
        driver = new Builder().forBrowser(process.env.USE_BROWSER).build();

        CurrencyConverter = new CurrencyPage(driver)

    })
    afterEach('Close browser', function () {
        //CurrencyConverter.closeBrowser();
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

    it.only('Test choosing currency by option', async function () {
        await CurrencyConverter.visit(fileUrl);
        await driver.manage().window().maximize();
        let select = await driver.wait(until.elementLocated(By.id('currency')), 5000);
        let currency = new Select(select);
        currency.selectByValue('MXN');

        // Get the currently selected option and verify its value
        const selectedOption = await currency.getFirstSelectedOption();
        const selectedOptionText = await selectedOption.getText();
        assert.equal(selectedOptionText, 'MXN', 'Mexican Peso');
    });

});
it('Test disabled option', async () => {
    await CurrencyConverter.visit(fileUrl);

    const select = await driver.findElement(By.id('cryptocurrency'));
    const option = await select.findElement(By.css('option[value=""]'));


    await option.click();


    const selectedOption = await select.findElement(By.css('option:checked'));
    assert.strictEqual(await selectedOption.getAttribute('value'), '', 'Option not selected');
});

it('Should display a message when button is clicked on empty inputs ', async () => {
    await CurrencyConverter.visit(fileUrl);


    const button = await driver.findElement(By.css('button[name="action"]'));
    await button.click();

    // cant find , wait for 5000ms
    const messageElement = await driver.findElement(By.css('.messages'));
    await driver.wait(until.elementIsVisible(messageElement), 5000);

    // assert message
    const messageText = await messageElement.getText();
    assert.notStrictEqual(messageText, '', 'All the fields are mandatory');
});

it('Test site logic is failed', async function () {
    await CurrencyConverter.visit(fileUrl);

    let select = await driver.findElement(By.id('currency'));
    let currency = new Select(select);
    currency.selectByValue("THB");
    const button = await driver.findElement(By.css('button[name="action"]'));
    await button.click();
    const messageElement = await driver.findElement(By.css('.messages'));
    await driver.wait(until.elementIsVisible(messageElement), 5000);

    // assert message
    const messageText = await messageElement.getText();
    assert.notStrictEqual(messageText, '', 'All the fields are mandatory');

})
























