// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// custom files
import { matchClass, matchClassINCSSFile } from "./class-matcher";
import { makeCompletionItemProvider } from "./provider";
import { getLanguagesAtApply, getLanguagesClassAttributes } from "./settings";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // possibly conflicts with tailwindcss intellisense
  // @see https://stackoverflow.com/a/67279173
  const config = vscode.workspace.getConfiguration("tailwindCSSForCSSer");
  const suggestionsClassAttributes = config.get<boolean>(
    "suggestions.classAttributes"
  );
  const suggestionsAtApply = config.get<boolean>("suggestions.atApply");

  // 1. class attribute
  if (suggestionsClassAttributes)
    context.subscriptions.push(
      makeCompletionItemProvider(
        getLanguagesClassAttributes(config),
        matchClass
      )
    );
  // 2. @apply
  if (suggestionsAtApply)
    context.subscriptions.push(
      makeCompletionItemProvider(
        getLanguagesAtApply(config),
        matchClassINCSSFile
      )
    );
}

// This method is called when your extension is deactivated
export function deactivate() {}
