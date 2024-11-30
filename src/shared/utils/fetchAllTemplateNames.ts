export default async function fetchAllTemplateNames() {
    try {
        // import all template JSON files
        const templateFiles = import.meta.glob('../../data/md-templates/*.json');

        // extract filenames without extensions
        const templateNames = Object.keys(templateFiles).map((path) => {
            const filename = path.split('/').pop()?.replace(".json", "");
            if (!filename) throw new Error(`Invalid path: ${path}`);
            return filename;
        });

        
        return templateNames;
    } catch (error) {
        throw new Error(`Error reading template files: ${(error as Error).message}`);
    }
}
