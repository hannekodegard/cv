var puppeteer = require('puppeteer')

;(async () => {
  var browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  var page = await browser.newPage()
  await page.goto('https://cv.hanneko.no')
  var year = new Date().getFullYear()
  await page.pdf({
    path: 'cv_hanneko_' + year + '.pdf',
    format: 'A4',
    printBackground: true,
  })
  await browser.close()
})()
