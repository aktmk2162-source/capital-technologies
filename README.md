# 株式会社キャピタル＆テクノロジーズ コーポレートサイト

静的HTML1ファイルで構成しています。ビルド作業もサーバーサイドの処理もありません。

## ファイル構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | サイト本体。HTML・CSS・JavaScript をすべて1ファイルに収めています |
| `serve.js` | ローカル確認用の簡易サーバー。公開には不要です |
| `README.md` | 本ファイル |

外部から読み込んでいるのは Google Fonts（Zen Kaku Gothic New / Archivo）のみです。画像ファイルは使用していません。ヘッダーのロゴマークとヒーロー背景は、いずれもコードで描画しています。**第三者の著作物は含みません。**

## ローカルで確認する

```bash
node serve.js
```

`http://localhost:8791` を開いてください。`index.html` をブラウザへ直接ドラッグしても表示できます。

---

## GitHub Pages で公開する手順

ログインを伴う操作のため、以下はご本人が実施してください。

### 1. GitHub にリポジトリを作成する

1. <https://github.com/new> を開きます。
2. Repository name に `capital-technologies` と入力します。
3. **Public** を選びます（Private では GitHub Pages を無料プランで公開できません）。
4. README等のチェックはすべて外したまま「Create repository」を押します。

### 2. このフォルダを push する

作成後に表示される `https://github.com/<ユーザー名>/capital-technologies.git` を控え、本フォルダで次を実行します。

```bash
git remote add origin https://github.com/<ユーザー名>/capital-technologies.git
git push -u origin main
```

認証を求められた場合は、GitHub のパスワードではなく**個人アクセストークン（Settings → Developer settings → Personal access tokens）** を入力します。

### 3. Pages を有効にする

1. リポジトリの **Settings → Pages** を開きます。
2. Source を **Deploy from a branch** にします。
3. Branch を **main**、フォルダを **/ (root)** にして Save を押します。
4. 1〜2分後、`https://<ユーザー名>.github.io/capital-technologies/` で公開されます。

### 4. 独自ドメインを割り当てる（ドメイン取得後）

1. お名前.com、Xserverドメイン等でドメインを取得します。
2. 取得先のDNS設定で、次のレコードを追加します。

   | 種別 | ホスト | 値 |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<ユーザー名>.github.io` |

   ※ GitHub Pages の公開用IPアドレスです（出典: GitHub Docs「Managing a custom domain for your GitHub Pages site」／取得日 2026-09-20）。GitHub側の変更がありうるため、設定時に同ページで最新値をご確認ください。

3. **Settings → Pages → Custom domain** に取得したドメインを入力して Save します。
4. DNSが反映されたのち、**Enforce HTTPS** にチェックを入れます。

---

## 公開前に差し替える箇所

| 箇所 | 現状 | 対応 |
| --- | --- | --- |
| ヘッダー・ヒーローの `Capital & Technologies` | 欧文のワードマークとして使用 | 登記上の英文商号が別にある場合は差し替え |

## 更新のしかた

`index.html` をテキストエディタで開き、該当箇所を書き換えて保存し、以下を実行します。

```bash
git add -A && git commit -m "内容を更新" && git push
```

数十秒後に公開サイトへ反映されます。

## 記載内容についての注意

- 実績件数、顧客名、「No.1」等の優位性を示す表現は、**裏付け資料がない限り追加しないでください。** 不当景品類及び不当表示防止法5条1号（優良誤認表示）に抵触する恐れがあります。
- 「事業内容」に記載のとおり、投資助言業（金融商品取引法29条）および有料職業紹介事業（職業安定法30条）に該当する表現は入れていません。業務範囲を広げる際は、登録・許可の要否を先にご確認ください。
