import meson from "../";

describe("The meson library", () => {
  test("Api matches snapshot", () => {
    expect(meson).toMatchInlineSnapshot(`Object {}`);
  });
});
