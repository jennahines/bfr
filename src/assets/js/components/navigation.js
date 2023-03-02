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
      '.site-header__button--util-menu'
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

  function handleMainMenu() {
    const mainNav = document.querySelector('.site-header__nav');
    const mainNavToggle = document.querySelector('.site-header__button--menu');

    function toggleMobileUtilityMenu() {
      if (mainNavToggle.getAttribute('aria-expanded') === 'true') {
        mainNavToggle.setAttribute('aria-expanded', 'false');
        mainNav.setAttribute('aria-hidden', 'true');
      } else {
        mainNavToggle.setAttribute('aria-expanded', 'true');
        mainNav.setAttribute('aria-hidden', 'false');
      }
    }

    if (SCREEN === `"mobile"`) {
      mainNav.setAttribute('aria-hidden', 'true');
      mainNavToggle.setAttribute('aria-hidden', 'false');
      mainNavToggle.setAttribute('aria-expanded', 'false');
      mainNavToggle.addEventListener('click', toggleMobileUtilityMenu);
    } else {
      mainNav.setAttribute('aria-hidden', 'false');
      mainNavToggle.setAttribute('aria-hidden', 'true');
    }
  }

  function initNavigation() {
    SCREEN = window.getComputedStyle(siteHeader, '::after').content;

    handleUtilityMenu();
    handleMainMenu();
  }

  initNavigation();
  window.addEventListener('resize', initNavigation);
}

export default Navigation;
