# 關於 Log in

1. 在種子資料的範圍內
2. 確認確認帳號密碼是否能成功登入

# 環境建置與需求

1. Node.js 16.14.0
2. Express: 4.16.4
3. Express-handlebars: 3.0.0
4. Bootstrap 5.1.3
5. Font-awesome: 4.7.0
6. mongoose:6.0.5
7. MongoDB

# 安裝步驟

1. 安裝 node.js 與 npm
2. 下載本專案至本地：git clone https://github.com/tujumg/Log-in
3. 透過終端機進入資料夾，輸入：npm install
4. 修改使用者名稱以及密碼等參數,輸入：export MONGODB_URI=“mongodb+srv://使用者名稱：使用者密碼@alpha.0q4uo.mongodb.net/Login?retryWrites=true&w=majority”
5. 匯入 Seeder 檔案
6. 繼續輸入：npm run dev
7. 若看見 Express is listening on http://localhost:3000 訊息則代表順利運行，打開瀏覽器進入到以下網址 http://localhost:3000
8. 若欲暫停使用 ctrl + c
