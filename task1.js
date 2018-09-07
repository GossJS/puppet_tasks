const puppeteer = require('puppeteer');
let page;
let browser;

const cases = [
    {s: 'abc'}, 
    {s: 'zyx'},
];

const URL = 'https://kodaktor.ru/g/autocase';  

(async () => {
  browser = await puppeteer.launch({
	  ... // добавьте нужные настройки
  });
  page = await browser.newPage();

  for (... of cases) {
        await ...  
  	    ...
        ...
  		  console.log(... value...));
  };
  await browser.close();  
})();
