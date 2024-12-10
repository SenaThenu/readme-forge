function extractHeadings(markdown: string): string[] {
    const headingRegex = /^(#{1,6}\s+.+)$/gm; // Match lines that start with hashes followed spaces
    const headings = [...markdown.matchAll(headingRegex)];
    return headings.map((match) => match[1].trim());
}

// generates a table of content based on the markdown
export default function generateToc(markdown: string) {
    const headings = extractHeadings(markdown);

    return headings
        .map((heading) => {
            const hashCount = heading.match(/^#+/)?.[0].length || 1;

            // extracting the heading text
            const text = heading.replace(/^#+\s*/, "").trim();

            // create a GitHub-style anchor link
            const anchor = text
                .toLowerCase()
                .split(/\s+/) // split on whitespace
                .map((word) => {
                    return word.replace(/[^\w-]/g, ""); // remove remaining non-word characters except hyphens;
                })
                .join("-");

            const indent = "  ".repeat(Math.max(0, hashCount - 1));

            return `${indent}- [${text}](#${anchor})`;
        })
        .join("\n");
}
