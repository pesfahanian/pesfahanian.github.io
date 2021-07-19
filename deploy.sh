#!/usr/bin/env sh

set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'deployment commit'
git push -f git@github.com:pesfahanian/pesfahanian.github.io.git master:gh-pages

cd -
