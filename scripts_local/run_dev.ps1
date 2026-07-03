Write-Host "Starting calcan local development server..." -ForegroundColor Cyan

# node_modulesが存在しない場合はインストールを実行する
if (-not (Test-Path "node_modules")) {
    Write-Host "node_modules not found. Running npm install..." -ForegroundColor Yellow
    npm install
}

npm run dev
