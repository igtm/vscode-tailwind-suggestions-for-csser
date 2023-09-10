# TailwindCSS Suggestion for CSSer
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

**You don't have to remeber all the Tailwind Utility Class Names. Just use this!**

![result-min](https://github.com/igtm/mdclient-sample-md/assets/6331737/fa868fd8-2b9c-40f6-8f77-0c2da0bec082)

## Features

- Suggesting TailwindCSS ClassName from vanilla CSS

## Active Conditions of Suggestion

- inside class attributes
- after `@apply`

## Extension Settings

- `tailwindCSSForCSSer.suggestions.classAttributes`: Enable autocomplete suggestions in class attributes.

- `tailwindCSSForCSSer.suggestions.atApply`: Enable autocomplete suggestions after `@apply`.

- `tailwindCSSForCSSer.additionalLanguages.classAttributes`: Enable features in languages that are not supported by default in class attributes.

- `tailwindCSSForCSSer.disableLanguages.classAttributes`: Disable features in languages that are supported by default in class attributes. (e.g. `html` `typescriptreact` etc..)

- `tailwindCSSForCSSer.additionalLanguages.atApply`: Enable features in languages that are not supported by default after @apply.

- `tailwindCSSForCSSer.disableLanguages.atApply`: Disable features in languages that are supported by default after @apply. (e.g. `html` `typescriptreact` etc..)

```jsonc
{
  // default settings below
  "tailwindCSSForCSSer.suggestions.classAttributes": true,
  "tailwindCSSForCSSer.suggestions.atApply": true,
  "tailwindCSSForCSSer.additionalLanguages.classAttributes": [],
  "tailwindCSSForCSSer.disableLanguages.classAttributes": [],
  "tailwindCSSForCSSer.additionalLanguages.atApply": [],
  "tailwindCSSForCSSer.disableLanguages.atApply": []
}
```

## Known Issues

Not all TailwindCSS class names are supported (complicated shadow css ..etc)


# TODO

- [x] suggestion in class attribute
- [x] suggestion after `@apply`
- [ ] limit active condition more precisely
- [ ] support arbitrary value
- [ ] support colors

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gitlab.com/gyo"><img src="https://avatars.githubusercontent.com/u/35870680?v=4?s=100" width="100px;" alt="Gyo Tamura"/><br /><sub><b>Gyo Tamura</b></sub></a><br /><a href="https://github.com/igtm/vscode-tailwind-suggestions-for-csser/commits?author=t-gyo" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
