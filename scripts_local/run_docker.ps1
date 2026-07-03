Write-Host "Building Docker image 'calcan:latest'..." -ForegroundColor Cyan
docker build -t calcan:latest $PSScriptRoot\..

if ($LASTEXITCODE -ne 0) {
    Write-Error "Docker build failed."
    exit $LASTEXITCODE
}

# 既存の同名コンテナがあれば停止して削除
$existingContainer = docker ps -a -q --filter "name=calcan"
if ($existingContainer) {
    Write-Host "Stopping and removing existing 'calcan' container..." -ForegroundColor Yellow
    docker stop calcan | Out-Null
    docker rm calcan | Out-Null
}

Write-Host "Running Docker container 'calcan' on port 5273..." -ForegroundColor Cyan
docker run -d -p 5273:80 --name calcan calcan:latest

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n🎉 calcan is successfully running in Docker!" -ForegroundColor Green
    Write-Host "➔ Open your browser and navigate to: http://localhost:5273" -ForegroundColor Green
} else {
    Write-Error "Failed to run Docker container."
}
