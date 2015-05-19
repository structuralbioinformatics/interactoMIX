#!/bin/sh
# @Author: jaumebonet
# @Date:   2015-05-19 12:45:46
# @Last Modified by:   jaumebonet
# @Last Modified time: 2015-05-19 12:57:08

export VENDOR='app/vendor'

rm -rf $VENDOR/jquery
rm -rf $VENDOR/fontawesome/less $VENDOR/fontawesome/scss
rm -rf $VENDOR/bootstrap/fonts $VENDOR/bootstrap/grunt $VENDOR/bootstrap/js $VENDOR/bootstrap/less
rm -rf $VENDOR/bootstrap/dist/js

rm -f $VENDOR/*/.*
rm -f $VENDOR/*/*.json
rm -f $VENDOR/*/README.md
rm -f $VENDOR/*/LICENSE
rm -f $VENDOR/*/Gruntfile.js
rm -f $VENDOR/*/bower.* $VENDOR/*/package.*
