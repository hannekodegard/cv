const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://cv.hanneko.no')
  const year = new Date().getFullYear()
  await page.pdf({
    path: `cv_hanneko_${year}.pdf`,
    format: 'A4',
    printBackground: true,
  })
  await browser.close()
})()
