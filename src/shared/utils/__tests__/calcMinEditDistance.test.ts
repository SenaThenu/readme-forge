import { describe, it, expect } from "vitest";
import calcMinEditDistance from "../calcMinEditDistance";

describe("calcMinEditDistance", () => {
    it("returns 0 when both strings are identical", () => {
        expect(calcMinEditDistance("hello", "hello")).toBe(0);
    });

    it("returns the length of the non-empty string when one string is empty", () => {
        expect(calcMinEditDistance("", "hello")).toBe(5);
        expect(calcMinEditDistance("world", "")).toBe(5);
    });

    it("handles case differences correctly", () => {
        expect(calcMinEditDistance("Hello", "hello")).toBe(1);
    });

    it("calculates edit distance with substitutions", () => {
        expect(calcMinEditDistance("kitten", "sitting")).toBe(3); // k->s, e->i, insert g
        expect(calcMinEditDistance("flaw", "lawn")).toBe(2); // f->l, insert n
    });

    it("calculates edit distance with insertions and deletions", () => {
        expect(calcMinEditDistance("abc", "abcd")).toBe(1); // one insertion
        expect(calcMinEditDistance("abcd", "abc")).toBe(1); // one deletion
    });

    it("handles completely different strings with no common characters", () => {
        expect(calcMinEditDistance("abc", "xyz")).toBe(3);
        expect(calcMinEditDistance("short", "longer")).toBe(6);
    });

    it("handles large strings efficiently", () => {
        const longStr1 = "a".repeat(1000);
        const longStr2 = "a".repeat(999) + "b";
        expect(calcMinEditDistance(longStr1, longStr2)).toBe(1);
    });
});
