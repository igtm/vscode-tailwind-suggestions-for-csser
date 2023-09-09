// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// custom files
import { suggestList } from "./data/suggestList";
import { languages } from "./languages";
import { Position, Range } from "vscode";
import { matchClass } from "./class-matcher";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "tailwind-vscode-suggestion" is now active!'
  );

  // ====================

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

  // possibly conflicts with tailwindcss intellisense
  // @see https://stackoverflow.com/a/67279173
  const provider3 = vscode.languages.registerCompletionItemProvider(
    languages,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        let lineUntilPos = document.getText(
          new Range(new Position(position.line, 0), position)
        );
        console.log(
          "provideCompletionItems!!! ",
          lineUntilPos,
          matchClass(lineUntilPos)
        );
        if (matchClass(lineUntilPos)) {
          return Object.entries(suggestList).map(
            ([cssProperties, tailwindClassName]) => {
              return makeCompletionItem(tailwindClassName, cssProperties);
            }
          );
        }

        // const completions = [];
        // completions.push(makeCompletionItem("items-center", "align-items: center"));
        // completions.push(makeCompletionItem("items-left", "align-items: left"));

        // const fontSize = new vscode.CompletionItem(
        //   "font-size:  (🌊text-)",
        //   vscode.CompletionItemKind.Event
        // );
        // fontSize.insertText = new vscode.SnippetString(
        //   `text-\${1|lg,sm,${Array.from(
        //     { length: 100 },
        //     (v, k) => `[${k + 1}px]`
        //   ).join(",")}|}`
        // );
        // fontSize.documentation = new vscode.MarkdownString("font-size");
        // completions.push(fontSize);

        // return completions;
      },
    },
    ...[" ", '"', "'"]
  );

  context.subscriptions.push(provider3);
}

// This method is called when your extension is deactivated
export function deactivate() {}
