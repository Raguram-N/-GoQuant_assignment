import { test, expect } from '@playwright/test';

test('TC004 – Add Car Voting', async ({ page }, testInfo) => {
  // -------------------------------
  // Step 1: Register new user
  // -------------------------------
  await page.goto('https://buggy.justtestit.org/register');

  const username = `testuser${new Date().getTime()}`;
  const firstName = 'Test';
  const lastName = 'User';
  const password = 'Test@1234';

  await page.fill('input[name="username"]', username);
  await page.fill('input[name="firstName"]', firstName);
  await page.fill('input[name="lastName"]', lastName);
  await page.fill('#password', password);
  await page.fill('#confirmPassword', password);

  const registerButton = page.locator('button:has-text("Register")');
  await registerButton.scrollIntoViewIfNeeded();
  await expect(registerButton).toBeEnabled({ timeout: 5000 });
  await registerButton.click();

  const confirmationMessage = page.locator('text=Registration is successful');
  await expect(confirmationMessage).toBeVisible({ timeout: 10000 });

  await testInfo.attach('After Registration', { 
    body: await page.screenshot(), 
    contentType: 'image/png' 
  });

  // -------------------------------
  // Step 2: Login with the new user
  // -------------------------------
  await page.goto('https://buggy.justtestit.org/login');
  await page.fill('input[name="login"]', username);
  await page.fill('input[name="password"]', password);

  await page.locator('button:has-text("Login")').click();

  const logoutLink = page.locator('a:has-text("Logout")');
  await expect(logoutLink).toBeVisible({ timeout: 10000 });

  await testInfo.attach('After Successful Login', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

  // -------------------------------
  // Step 3: Navigate directly to Diablo car page
  // -------------------------------
  await page.goto('https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg');

  // Wait until the Diablo image is visible
  //const diabloImg = page.locator('img[title="Diablo"]');
  //await diabloImg.waitFor({ state: 'visible', timeout: 20000 });
  //await diabloImg.scrollIntoViewIfNeeded();

  // -------------------------------
  // Step 4: Add comment and vote
  // -------------------------------
  const commentBox = page.locator('#comment');
  await commentBox.fill('Awesome car!');

  // Wait for vote count to appear
  /*const votesCount = page.locator('span.votes');
  await votesCount.waitFor({ state: 'visible', timeout: 20000 });
  const beforeVotesText = await votesCount.textContent();
  const beforeVotes = parseInt(beforeVotesText || '0', 10);
  console.log('Votes before:', beforeVotes);*/

  // Click Vote button
  const voteButton = page.locator('button:has-text("Vote")');
  await voteButton.click();

  // Step 5: Verify vote confirmation
  const confirmMsg = page.locator('text=Thank you for your vote!');
  await expect(confirmMsg).toBeVisible({ timeout: 10000 });

  // Wait a bit for vote count to update
  /*await page.waitForTimeout(1000);
  const afterVotesText = await votesCount.textContent();
  const afterVotes = parseInt(afterVotesText || '0', 10);
  console.log('Votes after:', afterVotes);

  // Verify vote incremented by 1
  expect(afterVotes).toBe(beforeVotes + 1);*/

  await testInfo.attach('After Voting', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

  // Step 6: Verify comment appears
const postedComment = page.locator('text=Awesome car!').first();
await expect(postedComment).toBeVisible({ timeout: 10000 });

  // -------------------------------
  // Step 7: Logout
  // -------------------------------
  await logoutLink.click();
  const loginButton = page.locator('button:has-text("Login")');
  await expect(loginButton).toBeVisible({ timeout: 8000 });

  await testInfo.attach('After Logout', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
});
