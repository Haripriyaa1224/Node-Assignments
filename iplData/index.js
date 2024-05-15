const puppeteer = require("puppeteer");
const xlsx = require("xlsx");

(async () => {
  const baseUrl = "https://www.iplt20.com/stats/";
  const sessions = ["2024", "2023", "2022", "2021", "2020"];
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  const workbook = xlsx.utils.book_new(); // Define workbook outside the loop

  for (const session of sessions) {
    const url = baseUrl + session;
    await page.goto(url, { waitUntil: "networkidle2" });

    //Getting orangeCap player Names

    const orangeCap = await page.evaluate(() => {
      const names = [];
      document
        .querySelectorAll('div[class="st-ply-name ng-binding"]')
        .forEach((name) => {
          names.push(name.textContent);
          
        });
      return names;
    });
    
    console.log(`Orange Cap for ${session}:`, orangeCap);

    const sheet = xlsx.utils.aoa_to_sheet([orangeCap]);
    xlsx.utils.book_append_sheet(workbook, sheet, `Orangecap Leader Board - ${session}`);
  }
  xlsx.writeFile(workbook, 'IplData.xlsx')
  await browser.close();
})();
