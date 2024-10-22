/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  openApiSidebar: [
    {
      type: "category",
      label: "Thessaly",
      link: {
        type: "generated-index",
        title: "Banking Services API",
        description:
          "Our collection of APIs provides a suite of services for managing accounts, cards, direct debits, payments, transfers and user-related operations. It allows you to retrieve and manipulate account details, handle card transactions, set up and execute direct debits, process payments and manage transfers. Additionally, the API includes functionalities for user authentication, password management, and updating user settings. This API is designed to support a wide range of financial operations, ensuring secure and efficient management of personal finance through a mobile platform.",
        slug: "/category/thessaly-api"
      },
      // @ts-ignore
      items: require("./docs/thessaly/sidebar.js")
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
