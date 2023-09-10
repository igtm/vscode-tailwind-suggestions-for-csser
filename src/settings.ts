import * as vscode from "vscode";
import { cssLanguages, languages } from "./languages";

export function getLanguagesClassAttributes(
  config: vscode.WorkspaceConfiguration
) {
  const additionalLanguagesClassAttributes = config.get<Array<string>>(
    "additionalLanguages.classAttributes",
    []
  );
  const disableLanguagesClassAttributes = config.get<Array<string>>(
    "disableLanguages.classAttributes",
    []
  );
  return Array.from(
    new Set(
      [...languages, ...additionalLanguagesClassAttributes].filter(
        (val) => !disableLanguagesClassAttributes.includes(val)
      )
    )
  );
}

export function getLanguagesAtApply(config: vscode.WorkspaceConfiguration) {
  const additionalLanguagesAtApply = config.get<Array<string>>(
    "additionalLanguages.atApply",
    []
  );
  const disableLanguagesAtApply = config.get<Array<string>>(
    "disableLanguages.atApply",
    []
  );
  return Array.from(
    new Set(
      [...cssLanguages, ...additionalLanguagesAtApply].filter(
        (val) => !disableLanguagesAtApply.includes(val)
      )
    )
  );
}
