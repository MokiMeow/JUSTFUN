import { describe, expect, it } from "vitest";
import { parseStyledTitle } from "./title";

describe("parseStyledTitle", () => {
  it("splits lines and preserves emphasized letter runs", () => {
    expect(parseStyledTitle("redefi<b>n</b>e <br /> g<b>a</b>ming")).toEqual([
      [
        [{ emphasized: false, text: "redefi" }, { emphasized: true, text: "n" }, { emphasized: false, text: "e" }],
      ],
      [
        [{ emphasized: false, text: "g" }, { emphasized: true, text: "a" }, { emphasized: false, text: "ming" }],
      ],
    ]);
  });

  it("treats markup-like text other than the supported emphasis tag as text", () => {
    expect(parseStyledTitle("hello <script>alert(1)</script>"))
      .toEqual([[[{ emphasized: false, text: "hello" }], [{ emphasized: false, text: "<script>alert(1)</script>" }]]]);
  });
});
