/**
 * List of adapters that should be automatically installed if not present already.
 * The first item which test function returns `true` will be used.
 * 
 * If you're the author of an adapter and want to add it to this list, please open a PR!
 * If you want to create an adapter, please see: TODO
 * 
 * @type {import("./src/utils/adapter/types").IAdapterManifestEntry}
 * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/zero-configuration-deployments/
 */
const adaptersManifest = [
    {
    name: `Netlify`,
    module: `gatsby-adapter-netlify`,
    test: () => !!process.env.NETLIFY || !!process.env.NETLIFY_LOCAL,
    versions: [
      {
        gatsbyVersion: `^5.0.0`,
        moduleVersion: `*`
      }
    ]
  },
  {
    name: `gatsby-adapter-testing`,
    module: `@lekoarts/gatsby-adapter-testing`,
    test: () => true,
    versions: [
      {
        gatsbyVersion: `^5.0.0`,
        moduleVersion: `^1.0.0`
      }
    ]
  },
]

module.exports = adaptersManifest