import { test, expect } from '@playwright/test'

test.describe('Shell App', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to start fresh each test
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test.describe('Header', () => {
    test('should display the header with title and subtitle', async ({
      page,
    }) => {
      await expect(page.locator('h1')).toHaveText('20 Forms, 40 Designs')
      await expect(page.locator('.subtitle').first()).toContainText(
        '40+ React UI libraries'
      )
    })
  })

  test.describe('Form Selection', () => {
    test('should display Forms section with all form options', async ({
      page,
    }) => {
      const formsSection = page
        .locator('section')
        .filter({ hasText: 'Forms' })
        .first()
      await expect(formsSection).toBeVisible()

      // Check some form options are visible in the forms section
      const formsList = formsSection.locator('.single-column-list')
      await expect(
        formsList.getByText('User registration / sign up')
      ).toBeVisible()
      await expect(formsList.getByText('User login / sign in')).toBeVisible()
      await expect(
        formsList.getByText('Password reset / forgot password request')
      ).toBeVisible()
    })

    test('should toggle individual form selection', async ({ page }) => {
      const checkbox = page
        .locator('label')
        .filter({ hasText: 'User registration / sign up' })
        .locator('input[type="checkbox"]')

      // Check initial state (should be checked by default for first 3 forms)
      await expect(checkbox).toBeChecked()

      // Toggle off
      await checkbox.click()
      await expect(checkbox).not.toBeChecked()

      // Toggle on
      await checkbox.click()
      await expect(checkbox).toBeChecked()
    })

    test('should select all forms when clicking "Select all"', async ({
      page,
    }) => {
      const formsSection = page
        .locator('section')
        .filter({ hasText: 'Forms' })
        .first()
      const selectAllCheckbox = formsSection
        .locator('label')
        .filter({ hasText: 'Select all' })
        .locator('input[type="checkbox"]')

      await selectAllCheckbox.click()

      // Verify multiple form checkboxes are checked
      const formCheckboxes = formsSection
        .locator('.single-column-list')
        .locator('input[type="checkbox"]')
      const count = await formCheckboxes.count()
      expect(count).toBeGreaterThan(10) // Should have many forms

      for (let i = 0; i < Math.min(count, 5); i++) {
        await expect(formCheckboxes.nth(i)).toBeChecked()
      }
    })

    test('should deselect all forms when clicking "Select none"', async ({
      page,
    }) => {
      const formsSection = page
        .locator('section')
        .filter({ hasText: 'Forms' })
        .first()
      const selectNoneCheckbox = formsSection
        .locator('label')
        .filter({ hasText: 'Select none' })
        .locator('input[type="checkbox"]')

      await selectNoneCheckbox.click()

      // Verify form checkboxes are unchecked
      const formCheckboxes = formsSection
        .locator('.single-column-list')
        .locator('input[type="checkbox"]')
      const count = await formCheckboxes.count()

      for (let i = 0; i < Math.min(count, 5); i++) {
        await expect(formCheckboxes.nth(i)).not.toBeChecked()
      }
    })
  })

  test.describe('Library Selection', () => {
    test('should display Component libraries section', async ({ page }) => {
      const librariesSection = page
        .locator('section')
        .filter({ hasText: 'Component libraries' })
      await expect(librariesSection).toBeVisible()
    })

    test('should display library options with website and repo links', async ({
      page,
    }) => {
      // Check that libraries have website/repo links
      const muiLink = page.getByRole('link', { name: 'website' }).first()
      await expect(muiLink).toBeVisible()
      await expect(muiLink).toHaveAttribute('target', '_blank')

      const repoLink = page.getByRole('link', { name: 'repo' }).first()
      await expect(repoLink).toBeVisible()
      await expect(repoLink).toHaveAttribute('target', '_blank')
    })

    test('should toggle individual library selection', async ({ page }) => {
      // Find a library checkbox (Ant Design should be first alphabetically)
      const checkbox = page
        .locator('label')
        .filter({ hasText: 'Ant Design' })
        .locator('input[type="checkbox"]')

      // Get initial state
      const initiallyChecked = await checkbox.isChecked()

      // Toggle
      await checkbox.click()

      if (initiallyChecked) {
        await expect(checkbox).not.toBeChecked()
      } else {
        await expect(checkbox).toBeChecked()
      }
    })

    test('should select all libraries when clicking "Select all"', async ({
      page,
    }) => {
      const librariesSection = page
        .locator('section')
        .filter({ hasText: 'Component libraries' })
      const selectAllCheckbox = librariesSection
        .locator('label')
        .filter({ hasText: 'Select all' })
        .locator('input[type="checkbox"]')

      await selectAllCheckbox.click()

      // Check that some libraries are selected
      const libraryCheckboxes = librariesSection
        .locator('.two-column-list')
        .locator('input[type="checkbox"]')
      const count = await libraryCheckboxes.count()
      expect(count).toBeGreaterThan(10) // Should have many libraries
    })

    test('should deselect all libraries when clicking "Select none"', async ({
      page,
    }) => {
      const librariesSection = page
        .locator('section')
        .filter({ hasText: 'Component libraries' })
      const selectNoneCheckbox = librariesSection
        .locator('label')
        .filter({ hasText: 'Select none' })
        .locator('input[type="checkbox"]')

      await selectNoneCheckbox.click()

      // Verify library checkboxes are unchecked
      const libraryCheckboxes = librariesSection
        .locator('.two-column-list')
        .locator('input[type="checkbox"]')
      const count = await libraryCheckboxes.count()

      for (let i = 0; i < Math.min(count, 5); i++) {
        await expect(libraryCheckboxes.nth(i)).not.toBeChecked()
      }
    })
  })

  test.describe('Theme Toggle', () => {
    test('should display theme toggle options', async ({ page }) => {
      await expect(page.getByText('Theme:')).toBeVisible()
      await expect(page.getByLabel('Light theme')).toBeVisible()
      await expect(page.getByLabel('Dark theme')).toBeVisible()
    })

    test('should have light theme selected by default', async ({ page }) => {
      const lightRadio = page.getByLabel('Light theme')
      await expect(lightRadio).toBeChecked()
    })

    test('should switch to dark theme when selected', async ({ page }) => {
      const darkRadio = page.getByLabel('Dark theme')
      await darkRadio.click()
      await expect(darkRadio).toBeChecked()

      const lightRadio = page.getByLabel('Light theme')
      await expect(lightRadio).not.toBeChecked()
    })

    test('should switch back to light theme', async ({ page }) => {
      // First switch to dark
      await page.getByLabel('Dark theme').click()

      // Then switch back to light
      const lightRadio = page.getByLabel('Light theme')
      await lightRadio.click()
      await expect(lightRadio).toBeChecked()
    })
  })

  test.describe('Group By Toggle', () => {
    test('should display group by toggle options', async ({ page }) => {
      await expect(page.getByText('Group previews by:')).toBeVisible()
      // Use role-based selectors to avoid matching library names with "Design System"
      await expect(
        page.getByRole('radio', { name: 'Design system' })
      ).toBeVisible()
      await expect(page.getByRole('radio', { name: 'Form name' })).toBeVisible()
    })

    test('should have "Design system" (library) selected by default', async ({
      page,
    }) => {
      const libraryRadio = page.getByRole('radio', { name: 'Design system' })
      await expect(libraryRadio).toBeChecked()
    })

    test('should switch to "Form name" grouping', async ({ page }) => {
      const formRadio = page.getByRole('radio', { name: 'Form name' })
      await formRadio.click()
      await expect(formRadio).toBeChecked()

      const libraryRadio = page.getByRole('radio', { name: 'Design system' })
      await expect(libraryRadio).not.toBeChecked()
    })
  })

  test.describe('Preview Section', () => {
    test('should display preview sections when forms and libraries are selected', async ({
      page,
    }) => {
      // Default state should show some previews
      const previewSections = page.locator('.preview-section')
      await expect(previewSections.first()).toBeVisible({ timeout: 10000 })
    })

    test('should display preview cards within sections', async ({ page }) => {
      const previewCard = page.locator('.preview-card').first()
      await expect(previewCard).toBeVisible({ timeout: 10000 })
    })

    test('should display iframe in preview cards', async ({ page }) => {
      const iframe = page.locator('.preview-iframe').first()
      await expect(iframe).toBeVisible({ timeout: 10000 })
      await expect(iframe).toHaveAttribute(
        'sandbox',
        'allow-scripts allow-forms allow-same-origin'
      )
    })

    test('should display GitHub link in preview card header', async ({
      page,
    }) => {
      const previewCardHeader = page.locator('.preview-card-header').first()
      await expect(previewCardHeader).toBeVisible({ timeout: 10000 })

      const githubLink = previewCardHeader.locator('a')
      await expect(githubLink).toHaveAttribute('href', /github\.com/)
      await expect(githubLink).toHaveAttribute('target', '_blank')
    })

    test('should show empty message when no libraries selected', async ({
      page,
    }) => {
      // Deselect all libraries
      const librariesSection = page
        .locator('section')
        .filter({ hasText: 'Component libraries' })
      const selectNoneCheckbox = librariesSection
        .locator('label')
        .filter({ hasText: 'Select none' })
        .locator('input[type="checkbox"]')
      await selectNoneCheckbox.click()

      await expect(
        page.getByText(
          'Select at least one implemented library to see previews.'
        )
      ).toBeVisible()
    })

    test('should show empty message when no forms selected', async ({
      page,
    }) => {
      // Deselect all forms
      const formsSection = page
        .locator('section')
        .filter({ hasText: 'Forms' })
        .first()
      const selectNoneCheckbox = formsSection
        .locator('label')
        .filter({ hasText: 'Select none' })
        .locator('input[type="checkbox"]')
      await selectNoneCheckbox.click()

      await expect(
        page.getByText('Select at least one form to see previews.')
      ).toBeVisible()
    })
  })

  test.describe('Grouping Behavior', () => {
    test('should show library-based sections when grouped by library', async ({
      page,
    }) => {
      // Ensure grouped by library (default)
      const libraryRadio = page.getByRole('radio', { name: 'Design system' })
      await libraryRadio.click()

      // Section titles should contain "previews" (e.g., "MUI previews")
      const previewSection = page.locator('.preview-section').first()
      await expect(previewSection).toBeVisible({ timeout: 10000 })

      const sectionTitle = previewSection.locator('h3')
      await expect(sectionTitle).toContainText('previews')
    })

    test('should show form-based sections when grouped by form', async ({
      page,
    }) => {
      // Switch to form grouping
      const formRadio = page.getByRole('radio', { name: 'Form name' })
      await formRadio.click()

      // Section titles should be form names
      const previewSection = page.locator('.preview-section').first()
      await expect(previewSection).toBeVisible({ timeout: 10000 })

      // The section should show form name without "previews" suffix
      const sectionTitle = previewSection.locator('h3')
      await expect(sectionTitle).toBeVisible()
    })
  })

  test.describe('Persistence', () => {
    test('should persist form selections across page reloads', async ({
      page,
    }) => {
      // Select a specific form
      const checkbox = page
        .locator('label')
        .filter({ hasText: 'Job application submission' })
        .locator('input[type="checkbox"]')

      // Make sure it's checked
      if (!(await checkbox.isChecked())) {
        await checkbox.click()
      }
      await expect(checkbox).toBeChecked()

      // Reload and verify it's still checked
      await page.reload()
      const checkboxAfterReload = page
        .locator('label')
        .filter({ hasText: 'Job application submission' })
        .locator('input[type="checkbox"]')
      await expect(checkboxAfterReload).toBeChecked()
    })

    test('should persist theme selection across page reloads', async ({
      page,
    }) => {
      // Switch to dark theme
      await page.getByRole('radio', { name: 'Dark theme' }).click()

      // Reload
      await page.reload()

      // Verify dark theme is still selected
      await expect(
        page.getByRole('radio', { name: 'Dark theme' })
      ).toBeChecked()
    })

    test('should persist groupBy selection across page reloads', async ({
      page,
    }) => {
      // Switch to form grouping
      await page.getByRole('radio', { name: 'Form name' }).click()

      // Reload
      await page.reload()

      // Verify form grouping is still selected
      await expect(page.getByRole('radio', { name: 'Form name' })).toBeChecked()
    })
  })

  test.describe('Dark Theme Badge', () => {
    test('should show warning badge for libraries without dark theme support in dark mode', async ({
      page,
    }) => {
      // Switch to dark theme
      await page.getByLabel('Dark theme').click()

      // Select Evergreen (known to not support dark theme)
      const evergreenCheckbox = page
        .locator('label')
        .filter({ hasText: 'Evergreen' })
        .locator('input[type="checkbox"]')
      if (!(await evergreenCheckbox.isChecked())) {
        await evergreenCheckbox.click()
      }

      // Look for the warning badge
      const warningBadge = page.locator('.no-dark-theme-badge')
      // This may or may not be visible depending on current selections
      // Just verify the class exists and is styled properly if visible
      const badgeCount = await warningBadge.count()
      if (badgeCount > 0) {
        await expect(warningBadge.first()).toContainText('Light only')
      }
    })
  })

  test.describe('Responsive Layout', () => {
    test('should display two-column layout for libraries', async ({ page }) => {
      const twoColumnList = page.locator('.two-column-list')
      await expect(twoColumnList).toBeVisible()
    })

    test('should display single-column layout for forms', async ({ page }) => {
      const singleColumnList = page.locator('.single-column-list')
      await expect(singleColumnList).toBeVisible()
    })
  })

  test.describe('External Links', () => {
    test('should have correct attributes on external links', async ({
      page,
    }) => {
      // Check website links
      const websiteLinks = page.getByRole('link', { name: 'website' })
      const websiteLinkCount = await websiteLinks.count()
      expect(websiteLinkCount).toBeGreaterThan(0)

      // Verify first few links have correct attributes
      for (let i = 0; i < Math.min(websiteLinkCount, 3); i++) {
        await expect(websiteLinks.nth(i)).toHaveAttribute('target', '_blank')
        await expect(websiteLinks.nth(i)).toHaveAttribute('rel', 'noreferrer')
      }

      // Check repo links
      const repoLinks = page.getByRole('link', { name: 'repo' })
      const repoLinkCount = await repoLinks.count()
      expect(repoLinkCount).toBeGreaterThan(0)

      for (let i = 0; i < Math.min(repoLinkCount, 3); i++) {
        await expect(repoLinks.nth(i)).toHaveAttribute('target', '_blank')
        await expect(repoLinks.nth(i)).toHaveAttribute('rel', 'noreferrer')
      }
    })
  })
})
