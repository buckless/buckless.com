#!/bin/sh

yarn build >> /dev/null
git checkout master >> /dev/null
cp -r dist/* .
rm -r dist/
git add .
git commit -m "chore: release"
git push -u origin master
