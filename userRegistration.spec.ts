import { test, expect } from '@playwright/test';

test('TC001 – User Registration', async ({ page }, testInfo) => {
  // Open the registration page
  await page.goto('https://buggy.justtestit.org/register');

  // Screenshot before filling the form
  const beforeFill = await page.screenshot();
  await testInfo.attach('Before Filling Registration Form', { body: beforeFill, contentType: 'image/png' });

  // Fill registration fields
  const username = `testuser${Math.floor(Math.random() * 10000)}`;
  const firstName = 'Test';
  const lastName = 'User';
  const password = 'Test@1234';

  await page.fill('input[name="username"]', username);
  await page.fill('input[name="firstName"]', firstName);
  await page.fill('input[name="lastName"]', lastName);
  await page.fill('#password', password);
  await page.fill('#confirmPassword', password);

  // Screenshot after filling all details, before clicking Register
  const afterFill = await page.screenshot();
  await testInfo.attach('After Filling Details', { body: afterFill, contentType: 'image/png' });

  // Ensure the Register button is enabled
  const registerButton = page.locator('button:has-text("Register")');
  await expect(registerButton).toBeEnabled();

  // Click Register
  await registerButton.click();

  // Wait for confirmation message
  const confirmationMessage = page.locator('text=Registration is successful');
  await expect(confirmationMessage).toBeVisible({ timeout: 5000 });

  // Screenshot after successful registration
  const afterRegister = await page.screenshot();
  await testInfo.attach('After Registration', { body: afterRegister, contentType: 'image/png' });

  console.log(`User "${username}" registered successfully!`);
});