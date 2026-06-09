import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log("Launching headless browser...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    console.log("Navigating to Resume page...");
    // Wait until all network requests are finished so fonts/icons load perfectly
    await page.goto('http://localhost:5173/resume', { waitUntil: 'networkidle0' });
    
    console.log("Switching language to Hungarian...");
    await page.evaluate(() => {
      // Find the language toggle button in the Navbar
      const buttons = Array.from(document.querySelectorAll('button'));
      const langBtn = buttons.find(b => b.textContent.includes('Magyar') || b.textContent.includes('English'));
      if (langBtn) {
        langBtn.click();
      }
    });
    
    // Wait for the React re-render
    await new Promise(r => setTimeout(r, 1000));

    // Optional: Hide the action buttons before generating the PDF
    await page.evaluate(() => {
      const buttons = document.querySelector('.print\\:hidden');
      if (buttons) buttons.style.display = 'none';
    });

    console.log("Generating styled PDF in Hungarian...");
    await page.pdf({
      path: 'public/Lajos_Maurer_CV_HU.pdf',
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
    console.log("✅ PDF Generated successfully! Saved to public/Lajos_Maurer_CV_HU.pdf");
  } catch (error) {
    console.error("❌ Failed to generate PDF:", error);
    process.exit(1);
  }
})();
