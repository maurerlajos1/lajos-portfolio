import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log("Launching headless browser...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    console.log("Navigating to Resume page...");
    // Wait until all network requests are finished so fonts/icons load perfectly
    await page.goto('http://localhost:5173/resume', { waitUntil: 'networkidle0' });
    
    // Optional: Hide the action buttons before generating the PDF
    await page.evaluate(() => {
      const buttons = document.querySelector('.print\\:hidden');
      if (buttons) buttons.style.display = 'none';
    });

    console.log("Generating styled PDF...");
    await page.pdf({
      path: 'public/Lajos_Maurer_CV.pdf',
      format: 'A4',
      printBackground: true, // This ensures our CSS backgrounds print properly!
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
    });

    await browser.close();
    console.log("✅ PDF Generated successfully! Saved to public/Lajos_Maurer_CV.pdf");
  } catch (error) {
    console.error("❌ Failed to generate PDF:", error);
    process.exit(1);
  }
})();
