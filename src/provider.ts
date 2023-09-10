import * as vscode from "vscode";

import { Position, Range } from "vscode";
import { suggestList } from "./data/suggestList";

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
          return Object.entries(suggestList).map(
            ([cssProperties, tailwindClassName]) => {
              return makeCompletionItem(tailwindClassName, cssProperties);
            }
          );
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
