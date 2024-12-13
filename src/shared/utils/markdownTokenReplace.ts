// types
import BlockDataType from "../../types/BlockDataType";
import GlobalDataType from "../../types/GlobalDataType";

// utils
import generateToc from "./generateToc";

// special token values
const readmeForgeLore = `## 🌟 The Lore of Readme Forge 📜  

**Once upon a byte, in the vast digital universe, a little document named Forgey was born.**  

Forgey wasn't an ordinary document; he had arms to reach out, a curious face full of expression 😊, and an unquenchable thirst to help creators tell their stories. Forgey lived in a magical land called **README Valley** 🌈, where incomplete projects roamed 🐾, each yearning for a voice that could tell their purpose to the world.  

One day, Forgey noticed a trend: developers and creators struggled to craft their project READMEs. They were bogged down by time constraints ⏳, design dilemmas 🎨, and the overwhelming need for perfection. Forgey, determined to help, thought, *"Why not make it fun and effortless?"* 🤔  

With a flick of his paper hat 🎩, Forgey summoned a forge—a place where anyone could build READMEs effortlessly. This forge wasn't a regular tool; it was a lively workshop ⚙️ filled with **visually pleasing components**, **easy-to-use templates**, and **endless possibilities** ✨. The forge allowed users to drag, drop, and tweak their README content until it was a masterpiece 🖌️.  

Forgey's forge soon became the heart of README Valley ❤️. With each README he helped create, Forgey grew happier 😊, knowing he was helping creators focus on what truly mattered—their projects 🚀.  

Forgey now invites you to his forge, saying, *"Let's turn your README dreams into a reality! Together, we'll build something amazing."* 🎉  
`;
const readmeForgeBirthday = "🎂 Readme Forge was born on 20th December 2024!";
const readmeJokes: string[] = [
    "Why did the README file break up with the code?\n- Because it couldn't handle the pressure of constant updates!",
    "Why don't programmers trust their README files?\n- Because they're always trying to hide the 'real' story!",
    "Why did the README file go to therapy?\n- It had too many unresolved issues!",
    "Why did the developer refuse to use a README template?\n- Because they couldn't commit to just one!",
    "What did the README file say to the code?\n- 'I'll explain everything... once you're done compiling.'",
    "Why did the README forge a new path?\n- Because it wanted to write its own story!",
    "What's a README file's favorite hobby?\n- Drafting up new ideas for the future!",
];

function getRegexToken(stringToReplace: string) {
    return new RegExp(stringToReplace, "g");
}

export default function markdownTokenReplace(
    markdown: string,
    globalsList: GlobalDataType[],
    allMarkdownBlocksCombined: boolean = false,
    usedBlocksList: BlockDataType[] | null = null
) {
    // auto generated table of content replace
    if (markdown.includes("{{auto_generated_toc}}")) {
        let combinedMarkdown = "";
        if (!allMarkdownBlocksCombined && usedBlocksList !== null) {
            for (let block of usedBlocksList) {
                combinedMarkdown += block.markdown;
                // line break
                combinedMarkdown += "\n\n";
            }
        } else {
            combinedMarkdown = markdown;
        }

        markdown = markdown.replace(
            getRegexToken("{{auto_generated_toc}}"),
            generateToc(combinedMarkdown)
        );
    }

    // special easter egg tokens
    markdown = markdown.replace(getRegexToken("{{lore}}"), readmeForgeLore);
    markdown = markdown.replace(
        getRegexToken("{{birthday}}"),
        readmeForgeBirthday
    );
    if (markdown.includes("{{joke_time}}")) {
        markdown = markdown.replace(
            getRegexToken("{{joke_time}}"),
            readmeJokes[Math.floor(Math.random() * readmeJokes.length)]
        );
    }

    // globals replace
    for (let global of globalsList) {
        markdown = markdown.replace(
            getRegexToken(`{{${global.global}}}`),
            global.value
        );
    }

    return markdown;
}
