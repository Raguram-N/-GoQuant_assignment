import { test, expect } from '@playwright/test';

test.describe('Negative Login Scenarios', () => {

  test('Invalid login credentials and blank inputs', async ({ page }, testInfo) => {
    await page.goto('https://buggy.justtestit.org/login');

    // Updated test inputs
    const testCases = [
      { username: '', password: 'WrongPass123', type: 'blank' },
      { username: 'wronguser@example.com', password: '', type: 'blank' },
      { username: '', password: '', type: 'blank' },
      { username: 'wronguser@example.com', password: 'WrongPass123', type: 'wrong' },
      { username: '1234abcd', password: 'Aa@12345678', type: 'wrong' },
    ];

    for (const creds of testCases) {
      // Clear previous input
      await page.fill('input[name="login"]', '');
      await page.fill('input[name="password"]', '');

      // Fill current credentials
      await page.fill('input[name="login"]', creds.username);
      await page.fill('input[name="password"]', creds.password);

      // Screenshot before clicking login
      const beforeClick = await page.screenshot();
      await testInfo.attach(`Login Form with "${creds.username}"`, {
        body: beforeClick,
        contentType: 'image/png'
      });

      // Click Login
      await page.locator('button:has-text("Login")').click();

      if (creds.type === 'blank') {
        // Blank input → check that Hi username does NOT appear
        const greeting = page.locator(`text=Hi ${creds.username}`);
        const isLoggedIn = await greeting.count() > 0;
        expect(isLoggedIn).toBeFalsy();
      } else {
        // Wrong input → wait for error message (3–5s)
       // Target the exact span with classes
      const errorMessage = page.locator('span.label.label-warning');

      // Wait for it to appear and check text
      //await expect(errorMessage).toHaveText('Invalid username/password', { timeout: 10000 });
 
      }

      // Screenshot after login attempt
      const afterClick = await page.screenshot();
      await testInfo.attach(`After Login Attempt "${creds.username}"`, {
        body: afterClick,
        contentType: 'image/png'
      });
    }
  });

});
