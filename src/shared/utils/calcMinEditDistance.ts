export default function calcMinEditDistance(searchQuery: string, blockName: string) {
    // based on the Levenshtein Algorithm to compare the search query to block names
    if (searchQuery.length === 0 || blockName.length === 0) {
        return Math.max(searchQuery.length, blockName.length)
    } else if (searchQuery === blockName) {
        return 0;
    } else {
        const distanceMatrix: number[][] = [];

        // setting the first row (comparing empty searchQuery with the blockName)
        distanceMatrix.push(new Array(blockName.length + 1).fill(0).map((_, i) => i))

        for (let s_i = 0; s_i < searchQuery.length; s_i++) {
            const row = [s_i+1];
            for (let b_i = 1; b_i < blockName.length + 1; b_i++) {
                if (searchQuery[s_i] === blockName[b_i - 1]) {
                    row.push(distanceMatrix[s_i][b_i-1]) // pushing the diagonal shift
                } else {
                    const prevMinEditDistance = Math.min(
                        row[b_i-1] + 1, // left shift
                        distanceMatrix[s_i][b_i-1] + 1, // diagonal shift 
                        distanceMatrix[s_i][b_i] + 1 // previous row current column
                    )
                    row.push(prevMinEditDistance)
                }
            }
            distanceMatrix.push(row)
        }

        return distanceMatrix[searchQuery.length][blockName.length]
    }
}