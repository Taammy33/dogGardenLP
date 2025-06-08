import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/image";
const outputDir = "./public/assets/img";

// 出力先ディレクトリを作成
fs.mkdirSync(outputDir, { recursive: true });

// 読み込み＆処理
const files = fs.readdirSync(inputDir);

files.forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);
  const outputBase = path.join(outputDir, baseName);

  if (ext === ".jpg" || ext === ".jpeg") {
    // JPG → WebPとJPG両方出力
    sharp(inputPath)
      .toFile(`${outputBase}.jpg`)
      .then(() => console.log(`✔ Copied: ${file}`));

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(`${outputBase}.webp`)
      .then(() => console.log(`🧪 Converted to WebP: ${file}`));
  } else if (ext === ".png" || ext === ".svg") {
    // PNG / SVG → そのままコピー
    fs.copyFileSync(inputPath, `${outputBase}${ext}`);
    console.log(`📄 Copied: ${file}`);
  } else {
    console.log(`⚠️ Skipped: ${file}（対応していない拡張子）`);
  }
});
