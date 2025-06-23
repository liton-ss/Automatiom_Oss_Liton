// tests/sop-creation.spec.ts
import { test, expect } from '@playwright/test';
import { LmsCreationPage } from '../pages/lms.page';
import testData from '../fixtures/testData.json';

test.describe('LMS Creation Tests', () => {
    let lmsCreationPage: LmsCreationPage;

    test.beforeEach(async ({ page }) => {
        lmsCreationPage = new LmsCreationPage(page);
        await lmsCreationPage.navigate(testData['lmsCreation']['url']);
    });

    test('should create new SOP successfully', async () => {
        await lmsCreationPage.completeSopCreation(
            testData['lmsCreation']['application'],
            testData['lmsCreation']['files']
        );
        
        // Add verification steps here
 
    });  
});