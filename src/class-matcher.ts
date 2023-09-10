export function matchClass(s: string): boolean {
  const pattern = /(^|\s+)(class|className|ngClass|:class|v-bind:class)=["'][^"']*$/; // class書き途中
  return pattern.test(s);
}

export function matchClassINCSSFile(s: string): boolean {
  const pattern = /(^|\s+)@apply(\s+|\w+)/; // @apply ...
  return pattern.test(s);
}
