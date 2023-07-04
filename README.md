
# Crypto-currency-converter
This is a small script that converts between different cryptocurrencies using HTML, CSS and JavaScript. It also includes Selenium tests to verify its functionality.

## Prerequisites
Before you can run the application and the tests, please make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation
To install the dependencies for this project, run the following command:

```bash
npm install
```

This will install the necessary packages such as Selenium, Selenium Webdriver, Mocha, and Mochawesome.

## Usage
To run the application, open the Crypto_Currency_Converter.html file in your web browser.

To run the tests, use the following command:

```bash
npm test
```

This runs the Mocha tests with a 10-second timeout and generates a Mochawesome report. The report can be found in the mochawesome-report folder.

To change the browser used for testing, update the USE_BROWSER variable in the .env file to your desired browser name (e.g. 'chrome', 'firefox', or 'safari'). By default, the application uses Chrome.

```javascript
USE_BROWSER = 'YOUR BROWSER'
driver = new Builder().forBrowser(process.env.USE_BROWSER).build()
```

## Contributing
If you find any issues or have suggestions for improvements, please submit them as issues on this project's Github repository. We welcome contributions to this project!