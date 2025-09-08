import { test, expect } from '@playwright/test';

test.describe('Positive Login and Logout Scenario', () => {

  test('Valid login and logout flow', async ({ page }, testInfo) => {
    await page.goto('https://buggy.justtestit.org/login');

    // Fill correct credentials
    await page.fill('input[name="login"]', '1234abcd');
    await page.fill('input[name="password"]', 'Aa@12345678');

    // Screenshot before login
    const beforeClick = await page.screenshot();
    await testInfo.attach('Before Valid Login', {
      body: beforeClick,
      contentType: 'image/png'
    });

    // Click Login
    await page.locator('button:has-text("Login")').click();

    // Wait until greeting with first name "a" is visible (proof of login)
    const greeting = page.locator('text=Logout');
    await expect(greeting).toBeVisible({ timeout: 8000 });

    // Screenshot after greeting appears (proof of successful login)
    const afterLogin = await page.screenshot();
    await testInfo.attach('After Successful Login - Greeting Visible', {
      body: afterLogin,
      contentType: 'image/png'
    });

    // Click Logout
    await page.locator('a:has-text("Logout")').click();

    // Wait until Login button is visible again (proof of logout)
    const loginButton = page.locator('button:has-text("Login")');
    await expect(loginButton).toBeVisible({ timeout: 5000 });

    // Screenshot after logout
    const afterLogout = await page.screenshot();
    await testInfo.attach('After Logout - Login Button Visible', {
      body: afterLogout,
      contentType: 'image/png'
    });
  });

});
