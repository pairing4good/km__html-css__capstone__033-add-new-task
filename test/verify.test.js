const http = require("http");
const fs = require("fs");
const puppeteer = require("puppeteer");
const { assert } = require("console");

let server;
let browser;
let page;

beforeAll(async () => {
  server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/.." + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(process.env.PORT || 3000);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:3000/index.html");
});

afterEach(async () => {
  await browser.close();
});

describe('the task-form', () => {
  it('should have a text input', async () => {
    const inputs = await page.$$('#task-form > button[type="submit"]');
    expect(inputs.length).toBe(1);
  });
});

describe('the text input', () => {      
  it('should have a placeholder that says "task description"', async () => {
    const placeholder = await page.$eval('#task-form > input[type="text"]', (textInput) => {
      return textInput.getAttribute('placeholder');
    });
    
    expect(placeholder).toBe("task description");
  });
  
  it('should be required', async () => {
    const isRequired = await page.$eval('#task-form > input[type="text"]', (textInput) => {
      return textInput.hasAttribute('required');
    });
    
    expect(isRequired).toBe(true);
  });
});

describe('the task-form', () => {
  it('should have a todo drowpdown option', async () => {
      const inputs = await page.$$('#task-form > select > option[value="todo"]');
      expect(inputs.length).toBe(1);
  });
});

describe('the task-form', () => {
  it('should have a doing drowpdown option', async () => {
    const inputs = await page.$$('#task-form > select > option[value="doing"]');
      expect(inputs.length).toBe(1);
  });
});

describe('the task-form', () => {
  it('should have a done drowpdown option', async () => {
    const inputs = await page.$$('#task-form > select > option[value="done"]');
      expect(inputs.length).toBe(1);
  });
});

describe('the task-form', () => {
  it('should have an Add button', async () => {
    const innerTexts = await page.$$eval('#task-form > button[type="submit"]', (inputs) => {
      let innerTexts = [];
      for(let i = 0; i < inputs.length; i++){
        innerTexts.push(inputs[0].innerText)
      }
      return innerTexts;
    });
    expect(innerTexts.length).toBe(1);
      
    expect(innerTexts[0]).toBe("Add");
  });
});