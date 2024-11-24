export default function getAllBlockCats() {
    try {
        // import all block category JSON files
        const blockCatFiles = import.meta.glob('../../data/md-blocks/*.json');
        
        // get filenames from the import paths
        const fileNames = Object.keys(blockCatFiles).map(path => {
            const filename = path.split('/').pop(); // get just the filename
            return filename?.replace(".json", "")
        });

        console.log(fileNames)
        
        return fileNames;
    } catch (error) {
        throw new Error(`Error reading files: ${(error as Error).message}`);
    }
}