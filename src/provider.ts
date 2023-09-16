import * as vscode from "vscode";

import { Position, Range } from "vscode";
import { suggestList } from "./data/suggestList";
import { colorList } from "./data/colorList";

function makeCompletionItem(
  tailwindClassName: string,
  css: string
): vscode.CompletionItem {
  const completion = new vscode.CompletionItem(
    `${css} (🌊${tailwindClassName})`,
    vscode.CompletionItemKind.Event
  );
  completion.insertText = new vscode.SnippetString(tailwindClassName);
  completion.documentation = new vscode.MarkdownString(css);
  return completion;
}

const colors = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];
const modifier = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const colorSnippet = `\${1|${colors.join(",")}|}-\${2|${modifier.join(",")}|}`;

function makeCompletionSnippetItem(
  tailwindClassNamePrefix: string, // e.g. bg
  css: string // e.g. background-color:[color]
): vscode.CompletionItem {
  const completion = new vscode.CompletionItem(
    `${css} (🌊${tailwindClassNamePrefix}-[color])`,
    vscode.CompletionItemKind.Event
  );
  completion.insertText = new vscode.SnippetString(
    `${tailwindClassNamePrefix}-${colorSnippet}`
  );
  completion.documentation = new vscode.MarkdownString(css);
  return completion;
}

export function makeCompletionItemProvider(
  languages: string[],
  pred: (s: string) => boolean
) {
  return vscode.languages.registerCompletionItemProvider(
    languages,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ) {
        let lineUntilPos = document.getText(
          new Range(new Position(position.line, 0), position)
        );
        if (pred(lineUntilPos)) {
          return [
            ...Object.entries(suggestList).map(
              ([cssProperties, tailwindClassName]) => {
                return makeCompletionItem(tailwindClassName, cssProperties);
              }
            ),
            ...Object.entries(colorList).map(
              ([cssProperties, tailwindClassName]) => {
                return makeCompletionSnippetItem(
                  tailwindClassName,
                  cssProperties
                );
              }
            ),
          ];
        }
      },
    },
    ...[" ", '"', "'"]
  );
}

// "a",
// "b",
// "c",
// "d",
// "e",
// "f",
// "g",
// "h",
// "i",
// "j",
// "k",
// "l",
// "m",
// "n",
// "o",
// "p",
// "q",
// "r",
// "s",
// "t",
// "u",
// "v",
// "w",
// "x",
// "y",
// "z",
