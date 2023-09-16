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
    - [x] 大量生産
        - [x] corePlugins.js: 定義ファイル
            - [x] addUtilities: そのままの定義なので一番簡単そう
            - [x] createUtilityPlugin: config.full.js　との合わせ技だった気がする
            - [-] addDefaults: ？ --tw- 系のやつしかないしやらなくていいかも
            - [x] matchUtilities: ？
              - [x] 例外系をもうちょっと救済する(２プロパティ以上あるやつは代表値を使うなど)
              ```
              # Valueが複雑な場合
              - box-shadow -> shadow
              - box-shadow -> ring
              - filter -> blur
              - filter -> brightness
              - filter -> contrast

              # 案①Valueを省略してしまう
              box-shadow:[default] (shadow)
              box-shadow:[md] (shadow-md)
              box-shadow:[sm] (shadow-sm)

              # 実装案
              - VALUE: var( があったら[modifier]にしてしまう
              - FIELD:　@defaults　があったら消す　
              - FIELD:　--tw　があったら消す
              ```
        - [x] config.full.js: 設定ファイルの完全系（STUB）
        - [x] color が取れてない
          - [x] snippet 方式でサジェスト
            - [x] color
            - [x] background-color
            - [x] border-color
            - [ ] none, inherit, white, black 系にも modifier 付けてしまってる問題
    - [ ] 任意の値系のサジェストいい感じに
    - [ ] 設定ファイル読み取ってカスタムThemeをサジェスト
    - [x] 言語認識、発火条件
    - [x] 設定ファイル化


- [ ] Naming
  - Headwind (reverse)
  - Tailwind Completion for CSSer
