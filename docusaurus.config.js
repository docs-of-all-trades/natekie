// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Natech Developers",
  tagline: "Craft custom banking experiences",
  url: "https://docs.natechbanking.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "natech", // Usually your GitHub org/user name.
  projectName: "natech-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/tailwind.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'docs-banner',
        content:
          'Natech Docs slated for a December 2024 release, stay tuned!🙌',
        backgroundColor: '#20232a',
        textColor: '#FFFFFF',
        isCloseable: true,
      },      
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/natech-logo2.png",
          srcDark: "img/natech-logo-dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            label: "Banking Services API",
            position: "left",
            to: "/docs/category/thessaly-api",
          },         
          { to: "/blog", label: "What's new", position: "right" },          
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },      
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/natechsa",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/natechbankingsolutions",
              },
              {
                label: " X (formerly Twitter)",
                href: "https://x.com/natechsa",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Natech Banking Solutions. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
      //customCss: require.resolve('./src/css/custom.css'),
      stylesheets: [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
      ],
    }),

    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            thessaly: {
              specPath: "examples/thessaly.yml",
              outputDir: "docs/thessaly",
              //downloadUrl:
              //  "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag",
              },
            },
          },
        },
      ],
    ],
  
    themes: ["docusaurus-theme-openapi-docs"],
  };
  
  module.exports = config;
