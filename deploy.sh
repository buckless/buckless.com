#!/bin/sh

yarn build
mv dist tmpdist
git checkout master
rm -r icons*
rm -r static
mv tmpdist/* .
rm -r tmpdist
rm stats.html
git add .
git commit -m "chore: release"
git push
