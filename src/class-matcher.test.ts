import { matchClass, matchClassINCSSFile } from "./class-matcher";

test("HTML check", () => {
  // double quotes
  expect(matchClass(` class=`)).toBe(false);
  expect(matchClass(` class="`)).toBe(true);
  expect(matchClass(` class="a`)).toBe(true);
  expect(matchClass(` class="align-`)).toBe(true);
  expect(matchClass(` class="align-items: `)).toBe(true);
  expect(matchClass(` class="align-items: center`)).toBe(true);
  expect(matchClass(` class="align-items: center;`)).toBe(true);
  expect(matchClass(` class="align-items: center;"`)).toBe(false);
  expect(matchClass(` classHOGE="align-items: center"`)).toBe(false);
  // single quotes
  expect(matchClass(` class=`)).toBe(false);
  expect(matchClass(` class='`)).toBe(true);
  expect(matchClass(` class='a`)).toBe(true);
  expect(matchClass(` class='align-`)).toBe(true);
  expect(matchClass(` class='align-items: `)).toBe(true);
  expect(matchClass(` class='align-items: center`)).toBe(true);
  expect(matchClass(` class='align-items: center;`)).toBe(true);
  expect(matchClass(` class='align-items: center;'`)).toBe(false);
  expect(matchClass(` classHOGE='align-items: center'`)).toBe(false);
  // abnormal patterns
  expect(matchClass(`hogeclass="`)).toBe(false);
});

// <div className="">
test("React check", () => {
  // double quotes
  expect(matchClass(` className=`)).toBe(false);
  expect(matchClass(` className="`)).toBe(true);
  expect(matchClass(` className="a`)).toBe(true);
  expect(matchClass(` className="align-`)).toBe(true);
  expect(matchClass(` className="align-items: `)).toBe(true);
  expect(matchClass(` className="align-items: center`)).toBe(true);
  expect(matchClass(` className="align-items: center;`)).toBe(true);
  expect(matchClass(` className="align-items: center;"`)).toBe(false);
  expect(matchClass(` classHOGE="align-items: center"`)).toBe(false);
  // single quotes
  expect(matchClass(` className=`)).toBe(false);
  expect(matchClass(` className='`)).toBe(true);
  expect(matchClass(` className='a`)).toBe(true);
  expect(matchClass(` className='align-`)).toBe(true);
  expect(matchClass(` className='align-items: `)).toBe(true);
  expect(matchClass(` className='align-items: center`)).toBe(true);
  expect(matchClass(` className='align-items: center;`)).toBe(true);
  expect(matchClass(` className='align-items: center;'`)).toBe(false);
  expect(matchClass(` classHOGE='align-items: center'`)).toBe(false);
});

// <div v-bind:class="{ active: isActive }"></div>
test("React check", () => {
  // double quotes
  expect(matchClass(` :class=`)).toBe(false);
  expect(matchClass(` :class="`)).toBe(true);
  expect(matchClass(` :class="a`)).toBe(true);
  expect(matchClass(` :class="align-`)).toBe(true);
  expect(matchClass(` :class="align-items: `)).toBe(true);
  expect(matchClass(` :class="align-items: center`)).toBe(true);
  expect(matchClass(` :class="align-items: center;`)).toBe(true);
  expect(matchClass(` :class="align-items: center;"`)).toBe(false);
  // single quotes
  expect(matchClass(` :class=`)).toBe(false);
  expect(matchClass(` :class='`)).toBe(true);
  expect(matchClass(` :class='a`)).toBe(true);
  expect(matchClass(` :class='align-`)).toBe(true);
  expect(matchClass(` :class='align-items: `)).toBe(true);
  expect(matchClass(` :class='align-items: center`)).toBe(true);
  expect(matchClass(` :class='align-items: center;`)).toBe(true);
  expect(matchClass(` :class='align-items: center;'`)).toBe(false);
  // double quotes
  expect(matchClass(` v-bind:class=`)).toBe(false);
  expect(matchClass(` v-bind:class="`)).toBe(true);
  expect(matchClass(` v-bind:class="{`)).toBe(true);
  expect(matchClass(` v-bind:class="{ active: isActive }`)).toBe(true);
  expect(matchClass(` v-bind:class="{ active: isActive }"`)).toBe(false);
  // single quotes
  expect(matchClass(` v-bind:class=`)).toBe(false);
  expect(matchClass(` v-bind:class='`)).toBe(true);
  expect(matchClass(` v-bind:class='{`)).toBe(true);
  expect(matchClass(` v-bind:class='{ active: isActive }`)).toBe(true);
  expect(matchClass(` v-bind:class='{ active: isActive }'`)).toBe(false);
});

// @apply ...
test("CSS check", () => {
  // double quotes
  expect(matchClassINCSSFile(` @apply`)).toBe(false);
  expect(matchClassINCSSFile(` @apply `)).toBe(true);
  expect(matchClassINCSSFile(` @apply max-w-full`)).toBe(true);
  expect(matchClassINCSSFile(` @apply max-w-full   items-`)).toBe(true);
});
