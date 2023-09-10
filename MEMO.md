# TODO

- [x] extension 眺めてみる
    - https://github.com/tailwindlabs/tailwindcss-intellisense
    - https://engineering.linecorp.com/ja/blog/uit-enhancement-vscode
    - https://github.com/imliam/vscode-inline-parameters
- [x] 作るものを決める
    - [x] css のプロパティ名からサジェストしてほしい
    - [ ] CSSファイルを一発でTailwindクラス名に変換してほしい（その逆も）
- [x] 作ってみる
    - [x] https://code.visualstudio.com/api/get-started/your-first-extension
    - [x] https://github.com/microsoft/vscode-extension-samples/tree/main/completions-sample
    - [x] https://code.visualstudio.com/docs/editor/intellisense
    - [ ] 大量生産
        - [ ] corePlugins.js: 定義ファイル
            - [x] addUtilities: そのままの定義なので一番簡単そう
            - [x] createUtilityPlugin: config.full.js　との合わせ技だった気がする
            - [-] addDefaults: ？ --tw- 系のやつしかないしやらなくていいかも
            - [x] matchUtilities: ？
              - [ ] 例外系をもうちょっと救済する(２プロパティ以上あるやつは代表値を使うなど)
        - [ ] config.full.js: 設定ファイルの完全系（STUB）
    - [ ] 任意の値系のサジェストいい感じに
    - [x] 言語認識、発火条件
    - [x] 設定ファイル化


- [ ] Naming
  - Headwind (reverse)
  - Tailwind Completion for CSSer



# Specification

- only for 1 line CSS class
