import { matchClass } from "./class-matcher";

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
//   expect(matchClass(` className=`)).toBe(false);
//   expect(matchClass(` className="`)).toBe(true);
//   expect(matchClass(` className="a`)).toBe(true);
//   expect(matchClass(` className="align-`)).toBe(true);
//   expect(matchClass(` className="align-items: `)).toBe(true);
//   expect(matchClass(` className="align-items: center`)).toBe(true);
//   expect(matchClass(` className="align-items: center;`)).toBe(true);
//   expect(matchClass(` className="align-items: center;"`)).toBe(false);
//   expect(matchClass(` classHOGE="align-items: center"`)).toBe(false);
//   // single quotes
//   expect(matchClass(` className=`)).toBe(false);
//   expect(matchClass(` className='`)).toBe(true);
//   expect(matchClass(` className='a`)).toBe(true);
//   expect(matchClass(` className='align-`)).toBe(true);
//   expect(matchClass(` className='align-items: `)).toBe(true);
//   expect(matchClass(` className='align-items: center`)).toBe(true);
//   expect(matchClass(` className='align-items: center;`)).toBe(true);
//   expect(matchClass(` className='align-items: center;'`)).toBe(false);
//   expect(matchClass(` classHOGE='align-items: center'`)).toBe(false);
//   // abnormal patterns
//   expect(matchClass(`hogeclass="`)).toBe(false);
});

// <div v-bind:class="{ active: isActive }"></div>