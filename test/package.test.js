// package.json consistency checks
// Using Node.js built-in test framework

const { test, describe } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');

const pkg = require('../package.json');
const installedHexo = require(path.join(__dirname, '..', 'node_modules', 'hexo', 'package.json'));

describe('package.json', () => {
  // Hexo rewrites package.json (hexo.version) on every run when this value
  // differs from the installed version, leaving a dirty working tree after builds.
  // When bumping hexo, update hexo.version in package.json to match.
  test('hexo.version matches the installed hexo version', () => {
    assert.strictEqual(pkg.hexo.version, installedHexo.version);
  });
});
