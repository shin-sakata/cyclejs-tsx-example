module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public`,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },

  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
