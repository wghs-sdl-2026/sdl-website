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

# caddyfile
cp ./Caddyfile ./bin/Caddyfile