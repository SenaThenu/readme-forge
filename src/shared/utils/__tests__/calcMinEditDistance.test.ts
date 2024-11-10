import { describe, it, expect } from "vitest";
import calcMinEditDistance from "../calcMinEditDistance";

describe("calcMinEditDistance", () => {
  
  it("should return 0 for identical strings", () => {
    expect(calcMinEditDistance("hello", "hello")).toBe(0);
  });

  it("should return the length of the second string if the first is empty", () => {
    expect(calcMinEditDistance("", "hello")).toBe(5);
  });

  it("should return the length of the first string if the second is empty", () => {
    expect(calcMinEditDistance("hello", "")).toBe(5);
  });

  it("should return the minimum edit distance for single character difference", () => {
    expect(calcMinEditDistance("kitten", "sitten")).toBe(1);
  });

  it("should handle insertions, deletions, and substitutions correctly", () => {
    expect(calcMinEditDistance("kitten", "sitting")).toBe(3);
  });

  it("should return correct distance for completely different strings of the same length", () => {
    expect(calcMinEditDistance("abc", "xyz")).toBe(3);
  });

  it("should handle case sensitivity correctly", () => {
    expect(calcMinEditDistance("Hello", "hello")).toBe(1);
  });
  
  it("should handle long strings accurately", () => {
    const str1 = "a".repeat(100);
    const str2 = "b".repeat(100);
    expect(calcMinEditDistance(str1, str2)).toBe(100);
  });

});
