#!/usr/bin/env node

let srcReadme;
let srcHtml;
let dest;
for (const arg of process.argv) {
  let match = arg.match(/^srcHtml=(\S+)$/);
  srcHtml = match ? match[1] : srcHtml;

  match = arg.match(/^srcReadme=(\S+)$/);
  srcReadme = match ? match[1] : srcReadme;

  match = arg.match(/^dest=(\S+)$/);
  dest = match ? match[1] : dest;
}
if (!srcReadme || !srcHtml || !dest) {
  throw new Error("srcReadme, srcHtml and dest args are required.");
}
const fs = require("fs");
const rawReadme = fs.readFileSync(srcReadme, "utf8");
const rawHtml = fs.readFileSync(srcHtml, "utf8");
const path = require("path");
const styles = fs.readFileSync(
  path.join(__dirname, "./index-styles.css"),
  "utf8"
);
const showdown = require("showdown");
const readmeHtml = new showdown.Converter({ noHeaderId: true }).makeHtml(
  rawReadme
);
const description = process.env.npm_package_description;
const package = process.env.npm_package_name;
let outputHtml = rawHtml
  .replace(/{{README}}/g, readmeHtml)
  .replace(/{{STYLES}}/g, styles)
  .replace(/{{DESCRIPTION}}/g, description)
  .replace(/{{PACKAGE}}/g, package);
fs.writeFileSync(dest, outputHtml, "utf8");
