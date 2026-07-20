export default {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: true, pkgRoot: 'dist/cornerstone' }],
    [
      '@semantic-release/git',
      { assets: ['CHANGELOG.md'], message: 'chore(release): ${nextRelease.version} [skip ci]' },
    ],
    '@semantic-release/github',
  ],
};
