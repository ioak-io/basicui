'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('rollup-plugin-typescript2');
var postcss = require('rollup-plugin-postcss');
var url = require('@rollup/plugin-url');

const packageJson = require("./package.json");

var rollup_config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({}),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
    url({
      include: "**/*.svg",
      limit: 0, // No limit, all SVGs will be handled as URLs
    }),
  ],
};

exports.default = rollup_config;
