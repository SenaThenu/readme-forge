import { describe, it, expect } from "vitest";
import generateToc from "../generateToc";

describe("generateToc", () => {
    it("should generate a table of contents for markdown headings with emojis", () => {
        const markdown = `
# Introduction 🌟
Some content...

## Features 🚀
- Feature 1
- Feature 2

### Sub-features 🌈
- Sub-feature 1
- Sub-feature 2
`;

        const expectedToc = `
- [Introduction 🌟](#introduction-)
  - [Features 🚀](#features-)
    - [Sub-features 🌈](#sub-features-)
`;

        expect(generateToc(markdown)).toBe(expectedToc.trim());
    });

    it("should generate a table of contents with headings that include multiple hyphens", () => {
        const markdown = `
# Hello-World
Some content...

## Features-Of-The-App
- Feature 1
- Feature 2

### Sub-Feature-List
- Sub-feature 1
- Sub-feature 2
`;

        const expectedToc = `
- [Hello-World](#hello-world)
  - [Features-Of-The-App](#features-of-the-app)
    - [Sub-Feature-List](#sub-feature-list)
`;

        expect(generateToc(markdown)).toBe(expectedToc.trim());
    });

    it("should handle a mix of headings with emojis and hyphens", () => {
        const markdown = `
# Getting-Started 🚀
Some content...

## Installation-Guide 📦
- Step 1
- Step 2

### Features-With-Emojis - Elden Ring - Is GOATED ✨
- Emoji 1
- Emoji 2
`;

        const expectedToc = `
- [Getting-Started 🚀](#getting-started-)
  - [Installation-Guide 📦](#installation-guide-)
    - [Features-With-Emojis - Elden Ring - Is GOATED ✨](#features-with-emojis---elden-ring---is-goated-)
`;

        expect(generateToc(markdown)).toBe(expectedToc.trim());
    });

    it("should generate correct toc with mixed header levels", () => {
        const markdown = `
# Main-Heading
Content...

## First-Section
Some text...

### Subsection-1
Text...

#### Subsection-2
More text...
`;

        const expectedToc = `
- [Main-Heading](#main-heading)
  - [First-Section](#first-section)
    - [Subsection-1](#subsection-1)
      - [Subsection-2](#subsection-2)
`;

        expect(generateToc(markdown)).toBe(expectedToc.trim());
    });
});
