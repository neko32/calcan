#!/bin/bash
echo "Starting calcan local development server..."

# node_modulesが存在しない場合はインストールを実行する
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Running npm install..."
    npm install
fi

npm run dev
