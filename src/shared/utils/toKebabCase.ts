export default function toKebabCase(input: string) {
    return input
        .replace(/([a-z])([A-Z])/g, "$1-$2") // add a dash between lowercase and uppercase letters
        .replace(/[\s_]+/g, "-")            // replace spaces and underscores with dashes
        .toLowerCase();                     // convert to lowercase
}