import fetchBlockCatData from "./fetchBlockCatData";

export default async function fetchAllBlockCatNames() {
    try {
        // import all block category JSON files
        const blockCatFiles = import.meta.glob('../../data/md-blocks/*.json');

        // extract filenames without extensions
        const blockCatNames = Object.keys(blockCatFiles).map((path) => {
            const filename = path.split('/').pop()?.replace(".json", "");
            if (!filename) throw new Error(`Invalid path: ${path}`);
            return filename;
        });

        // fetch display names for each filename
        const blockCatDisplayNamePromises = blockCatNames.map(async (filename) => {
            const blockCatData = await fetchBlockCatData(filename);
            return blockCatData?.displayName ?? null; // return null if no display name
        });

        // resolve all display name promises
        const blockCatDisplayNames = await Promise.all(blockCatDisplayNamePromises);

        // construct the dictionary
        const blockCatNamesDict = blockCatNames.reduce((acc, name, index) => {
            const displayName = blockCatDisplayNames[index];
            if (displayName) acc[name] = displayName; // only include valid display names
            return acc;
        }, {} as Record<string, string>);

        return blockCatNamesDict;
    } catch (error) {
        throw new Error(`Error reading block category files: ${(error as Error).message}`);
    }
}
