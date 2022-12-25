/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />

import { add } from "./deps.test.ts";

const { test } = Deno;

describe("fast-check test suite", () =>
  it("should exist in the global scope", () =>
    assertEquals(typeof fc, "object")));

test("add() test", () => assertEquals(add(2, 3), 5));
