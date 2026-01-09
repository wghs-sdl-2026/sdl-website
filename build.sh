#!/bin/bash
set -e

rm -rf ./bin
mkdir -p ./bin

# frontend webui
cd webui
npm install
npm run build
cd ..

mkdir -p ./bin/webui
cp -r ./webui/dist/* ./bin/webui/

# backend api server
cd api
npm install
npm run build
cd ..

mkdir -p ./bin/api
cp -r ./api/dist/* ./bin/api/
cp ./api/package.json ./bin/api/
cp ./api/package-lock.json ./bin/api/

cd ./bin/api
npm ci --omit=dev
cd ../..


# caddyfile
cp ./Caddyfile ./bin/Caddyfile

# done
echo ""
echo "Build finished."
echo "Remember to set the environment variables or add a \`.env\` file in \`./bin/api\`."