module.exports = {
  title: 'Doc Variables Documentation',
  tagline: 'Documentation for Doc Variables',
  url: 'https://docs.docvars.com',
  baseUrl: '/',
  favicon: 'https://uploads-ssl.webflow.com/6191a6481bfe916000691a52/61951ef7220bd78949f6b72f_favicon-32x32.png',
  organizationName: 'doc-variables', // Usually your GitHub org/user name.
  projectName: 'google-add-on-doc-variables', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Doc Variables Documentation',
      logo: {
        alt: 'Doc Variables Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Important Links',
          items: [
            {
              label: 'Website',
              to: 'https://docvars.com/',
            },
            {
              label: 'Marketplace Listing',
              to: 'https://workspace.google.com/marketplace/app/doc_variables/232821636920',
            },
            {
              label: 'Support',
              to: 'https://docvars.canny.io',
            },
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Doc Variables, LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DocVars/docvars-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};