#/bin/bash
set -eu
echo "Thanks for using my app 👻";

rm -r app/views;
npm install;
npm install sass;
rm Initialisation.sh;
npm run start