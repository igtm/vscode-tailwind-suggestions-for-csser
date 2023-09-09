export function matchClass(s: string): boolean {
  const pattern = /(^|\s+)(class|className)=["'][^"']*$/; // class書き途中
  return pattern.test(s);
}
