/**
 * Handles navigation across screen sizes
 *
 */
function Navigation() {
  const siteHeader = document.querySelector('.site-header');
  let SCREEN = window.getComputedStyle(siteHeader, '::after').content;

  function handleUtilityMenu() {
    const utilityNav = document.querySelector('.site-header__utility-nav');
    const utilityNavToggle = document.querySelector(
      '.site-header__utility-button'
    );

    function toggleMobileUtilityMenu() {
      if (utilityNavToggle.getAttribute('aria-expanded') === 'true') {
        utilityNavToggle.setAttribute('aria-expanded', 'false');
        utilityNav.setAttribute('aria-hidden', 'true');
      } else {
        utilityNavToggle.setAttribute('aria-expanded', 'true');
        utilityNav.setAttribute('aria-hidden', 'false');
      }
    }

    if (SCREEN === `"mobile"`) {
      utilityNav.setAttribute('aria-hidden', 'true');
      utilityNavToggle.setAttribute('aria-hidden', 'false');
      utilityNavToggle.setAttribute('aria-expanded', 'false');
      utilityNavToggle.addEventListener('click', toggleMobileUtilityMenu);
    } else {
      utilityNav.setAttribute('aria-hidden', 'false');
      utilityNavToggle.setAttribute('aria-hidden', 'true');
    }
  }

  function handleMainMenu() {}

  function initNavigation() {
    SCREEN = window.getComputedStyle(siteHeader, '::after').content;

    handleUtilityMenu();
    handleMainMenu();
  }

  initNavigation();
  window.addEventListener('resize', initNavigation);
}

export default Navigation;
