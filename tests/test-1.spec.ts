import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import testData from "../fixtures/testData.json"; 

test('login with valid data', async ({ page }) => {
    //Login Data 
    // const loginPage = new LoginPage(page);
    // await loginPage.navigate(testData.validUser.loginUrl);
    // await loginPage.login(testData.validUser.email, testData.validUser.password);
    // await page.pause(); // Optional: pause to inspect after login
    // Wait for the expected dashboard text to appear
    //   const title = page.getByText('ONE STOP SERVICE CENTER', { exact: true });
    //   await expect(title).toBeVisible();


await page.goto('http://192.168.1.125:31710/sops/188');

await page.pause();
});
