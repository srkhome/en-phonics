# 自然發音互動 21 天（純前端、無 AI）

- 純 HTML + CSS + JS（無後端、無 API）
- 任何人拿到網址都能使用
- 進度儲存在使用者本機（localStorage）
- 內建「圖卡翻牌模式」，並依 Day 自動顯示相關卡片

## 專案結構
```
phonics21/
  index.html
  css/style.css
  js/app.js
  assets/
```

## 部署到 GitHub Pages
1. 建立 GitHub Repo（例如：`phonics21`）
2. 上傳本專案檔案到 repo 根目錄（index.html 在根目錄）
3. Settings → Pages
4. Source: Deploy from a branch
5. Branch: main + /(root)
6. 取得網址：`https://你的帳號.github.io/phonics21/`

## 擴充
- 課程：在 `js/app.js` 的 `lessons` 陣列新增/修改
- 圖卡：在 `letterCards` / `wordCards` 增加卡片，並用 `tags: ["dayN"]` 控制分日顯示
