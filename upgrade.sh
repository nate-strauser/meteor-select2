#!/bin/bash
#
# --------------
# -- update repository
# --------------

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
cd lib
rm -rf select2
git clone https://github.com/select2/select2.git
rm -rf select2/.git
git add select2


# update the version in ../package.js with that in select2/package.json
V=`grep version select2/package.json`
sed -iold 's#version\:[^,]*,#'"${V}"'#g' ../package.js
git add ../package.js

echo "Upgrade Complete... ${V}"
echo '  $ git commit'



