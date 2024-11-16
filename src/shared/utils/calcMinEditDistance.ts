export default function calcMinEditDistance(searchQuery: string, blockName: string) {
    // based on the Levenshtein Algorithm to compare the search query to block names

    if (searchQuery.length === 0 || blockName.length === 0) {
        return Math.max(searchQuery.length, blockName.length)
    } else if (searchQuery === blockName) {
        return 0;
    } else {
        searchQuery = searchQuery.toLowerCase()
        blockName = blockName.toLowerCase()

        let prevRow = new Array(blockName.length + 1).fill(0).map((_, i) => i)

        for (let s_i = 0; s_i < searchQuery.length; s_i++) {
            let currentRow = [s_i + 1]

            for (let b_i = 1; b_i < blockName.length + 1; b_i++) {
                if (searchQuery[s_i] === blockName[b_i - 1]) {
                    // no edit needed, carry forward the previous diagonal value
                    currentRow.push(prevRow[b_i-1])
                } else {
                    const prevMinEditDistance = Math.min(
                        currentRow[b_i-1] + 1, // left shift
                        prevRow[b_i-1] + 1, // diagonal shift 
                        prevRow[b_i] + 1 // previous row current column
                    )
                    currentRow.push(prevMinEditDistance)
                }
            }
            prevRow = currentRow;
        }

        return prevRow[blockName.length]
    }
}