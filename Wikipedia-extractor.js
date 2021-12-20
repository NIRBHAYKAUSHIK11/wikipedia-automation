
// node Wikipedia-extractor.js --url="https://www.wikipedia.org/" 

// npm init -y
// npm install puppeteer
// npm install minimist

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);

//let configJSON = fs.readFileSync(args.config, "utf-8");
//let configJSO = JSON.parse(configJSON);
run();
async function run() {
    // start the browser
    let browser = await puppeteer.launch({
        defaultViewport: null,
        args: [
            "--start-maximized"
        ],
        headless: false
    });

    // get a tab
    let pages = await browser.pages();
    let page = pages[0];

    // go to url
    await page.goto(args.url);

    //await page.waitForSelector("a[js-link-box-en]");
    await page.click("a[id='js-link-box-en']");
    //await page.waitForNavigation();
    // click on login2
    await page.waitForSelector("a[href='/wiki/Wikipedia:Contents/Portals']");
    await page.click("a[href='/wiki/Wikipedia:Contents/Portals']");
    //await page.click(".portal-hright portal-vbot");
    await page.waitForSelector("a[href='/wiki/Wikipedia:Contents/A%E2%80%93Z_index']");
    await page.click("a[href='/wiki/Wikipedia:Contents/A%E2%80%93Z_index']");
    
    await page.waitForSelector("a[href='/wiki/Special:AllPages/N']");
    await page.click("a[href='/wiki/Special:AllPages/N']");

    await page.waitForSelector("a[href='/wiki/N']");
    await page.click("a[href='/wiki/N']");

    await page.goto("https://en.wikipedia.org/wiki/N#History");
    await page.screenshot({ path: "history.png" });
    await page.goto("https://en.wikipedia.org/wiki/N#Useinwritingsystems");
    await page.screenshot({ path: "img2.png" });
    


   
    
}

