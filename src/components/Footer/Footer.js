
import React from 'react';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    // Add more social links if needed
  ],
};

function Footer() {
  return (
    <>
      {/* Light Theme Footer */}
      <footer className="bg-white dark:hidden" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          {/* Footer Content for Light Theme */}
          {/* Add your footer structure for light theme here */}
        </div>
      </footer>

      {/* Dark Theme Footer */}
      <footer className="hidden bg-gray-900 text-white dark:block" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          {/* Footer Content for Dark Theme */}
          {/* Add your footer structure for dark theme here */}
        </div>
      </footer>
    </>
  );
}

export default Footer;