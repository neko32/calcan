#!/bin/bash
echo "Building Docker image 'calcan:latest'..."
docker build -t calcan:latest "$(dirname "$0")/.."

if [ $? -ne 0 ]; then
    echo "Error: Docker build failed."
    exit 1
fi

# 既存の同名コンテナがあれば停止して削除
if [ "$(docker ps -a -q -f name=calcan)" ]; then
    echo "Stopping and removing existing 'calcan' container..."
    docker stop calcan > /dev/null
    docker rm calcan > /dev/null
fi

echo "Running Docker container 'calcan' on port 5273..."
docker run -d -p 5273:80 --name calcan calcan:latest

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 calcan is successfully running in Docker!"
    echo "➔ Open your browser and navigate to: http://localhost:5273"
else
    echo "Error: Failed to run Docker container."
    exit 1
fi
