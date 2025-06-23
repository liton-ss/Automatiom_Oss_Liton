import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
//import testData from "../fixtures/testData.json";
import testData from "../../fixtures/testData.json"; 

test('login with valid data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(testData.validUser.loginUrl);
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    
    await page.waitForURL(testData['baseurl']);
    
      await page.context().storageState({
        path: 'fixtures/auth/userAuthState.json'
      });
      await page.pause(); 
});
