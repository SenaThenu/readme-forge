const e="🛠️ Project",t="Template for building GitHub Project READMEs",n=[{name:"title-and-description",displayName:"Title & Description",description:"Section with the title, description and logo",markdown:`<div align="center">
  <a href="https://github.com/{{github_username}}/{{github_repo_name}}">
    <img src="https://github.com//{{github_username}}/{{github_repo_name}}/blob/main/src/assets/logo.svg?raw=true" alt="Repo Logo" height="100">
  </a>
</div>

<h3 align="center">{{title}}</h3>

<div align="center">This is cool README file!</div>`,id:"ea9cca4d-50e9-4eee-994b-557e3a2b57b3",originalMarkdown:`<div align="center">
  <a href="https://github.com/{{github_username}}/{{github_repo_name}}">
    <img src="https://github.com//{{github_username}}/{{github_repo_name}}/blob/main/src/assets/logo.svg?raw=true" alt="Repo Logo" height="100">
  </a>
</div>

<h3 align="center">{{title}}</h3>

<div align="center">This is cool README file!</div>`},{name:"project-shields",displayName:"Project Shields",description:"Shields to showcase project stats",markdown:`<div align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?labelColor=003694&color=ffffff" alt="License">
  <img src="https://img.shields.io/github/contributors/{{github_username}}/{{github_repo_name}}?labelColor=003694&color=ffffff" alt="GitHub contributors" >
  <img src="https://img.shields.io/github/stars/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Stars">
  <img src="https://img.shields.io/github/forks/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Forks">
  <img src="https://img.shields.io/github/issues/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Issues">
</div>`,id:"5a56e945-5ef1-441a-8718-1bad9a2ce2fa",originalMarkdown:`<div align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?labelColor=003694&color=ffffff" alt="License">
  <img src="https://img.shields.io/github/contributors/{{github_username}}/{{github_repo_name}}?labelColor=003694&color=ffffff" alt="GitHub contributors" >
  <img src="https://img.shields.io/github/stars/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Stars">
  <img src="https://img.shields.io/github/forks/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Forks">
  <img src="https://img.shields.io/github/issues/{{github_username}}/{{github_repo_name}}.svg?labelColor=003694&color=ffffff" alt="Issues">
</div>`},{name:"share",displayName:"Share",description:"Social media share links",markdown:`<div align="center">
  
  <strong>Share</strong>

  <a href="https://x.com/intent/tweet?hashtags=opensource%2Creadme&text=Check%20this%20out:%20{{title}}!&url=https%3A%2F%2Fgithub.com%2F{{github_username}}%2F{{github_repo_name}}">
    <img src="https://img.shields.io/badge/Share_on_X-%23000000.svg?logo=X&logoColor=white" alt="Share on X" />
  </a>
  
</div>`,id:"fa8a8d61-26e4-46be-9476-bd03cf8e5aba",originalMarkdown:`<div align="center">
  
  <strong>Share</strong>

  <a href="https://x.com/intent/tweet?hashtags=opensource%2Creadme&text=Check%20this%20out:%20{{title}}!&url=https%3A%2F%2Fgithub.com%2F{{github_username}}%2F{{github_repo_name}}">
    <img src="https://img.shields.io/badge/Share_on_X-%23000000.svg?logo=X&logoColor=white" alt="Share on X" />
  </a>
  
</div>`},{name:"toc",displayName:"Table of Content",description:"Easy navigation to sections",markdown:`<details>

<summary><strong>Table of Contents 📜</strong></summary>

{{auto_generated_toc}}

</details>`,id:"000157e2-7a2e-4ecc-a6c8-7de85c18e2e0",originalMarkdown:`<details>

<summary><strong>Table of Contents 📜</strong></summary>

{{auto_generated_toc}}

</details>`},{name:"features",displayName:"Features",description:"A brief list of all the features",markdown:`## Features ✨

* **Code Search:** Quickly find code across your repositories.
* **Pull Requests:** Collaborate efficiently on code changes.
* **Issues:** Track bugs, feature requests, and other tasks.
* **Projects:** Organize and prioritize work.
* **Wikis:** Create and share documentation.
`,id:"4fc4c77e-a4e5-42af-be34-5c05b40bdb4f",originalMarkdown:`## Features ✨

* **Code Search:** Quickly find code across your repositories.
* **Pull Requests:** Collaborate efficiently on code changes.
* **Issues:** Track bugs, feature requests, and other tasks.
* **Projects:** Organize and prioritize work.
* **Wikis:** Create and share documentation.
`},{name:"getting-started",displayName:"Getting Started",description:"Steps to get started with the project",markdown:`## Getting Started 🌱

Welcome! Follow the steps below to get everything up and running.

### Prerequisites 📃

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

You can download Node.js from [here](https://nodejs.org/).

### Installation 📥

To install the project, follow these steps:

#### Windows 🪟

1. Navigate to the latest release of the repo
2. Under assets, download the \`release_for_windows.zip\`
3. Extract it and run \`release.exe\`

#### MacOS 🍎

1. Navigate to the latest release of the repo
2. Under assets, download the \`release_for_mac.zip\`
3. Extract it and run \`release.dmg\`

#### Linux 🐧

1. Clone the repository to your local machine:
    \`\`\`bash
    git clone https://github.com/yourusername/yourproject.git
    \`\`\`
2. Navigate to the project directory:
    \`\`\`bash
    cd yourproject
    \`\`\`
3. Install the dependencies:
    \`\`\`bash
    npm install
    \`\`\`
4. Run it:
    \`\`\`bash
    npm start
    \`\`\`
`,id:"976700aa-b9c4-47b0-8d4f-df47b1b8734d",originalMarkdown:`## Getting Started 🌱

Welcome! Follow the steps below to get everything up and running.

### Prerequisites 📃

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

You can download Node.js from [here](https://nodejs.org/).

### Installation 📥

To install the project, follow these steps:

#### Windows 🪟

1. Navigate to the latest release of the repo
2. Under assets, download the \`release_for_windows.zip\`
3. Extract it and run \`release.exe\`

#### MacOS 🍎

1. Navigate to the latest release of the repo
2. Under assets, download the \`release_for_mac.zip\`
3. Extract it and run \`release.dmg\`

#### Linux 🐧

1. Clone the repository to your local machine:
    \`\`\`bash
    git clone https://github.com/yourusername/yourproject.git
    \`\`\`
2. Navigate to the project directory:
    \`\`\`bash
    cd yourproject
    \`\`\`
3. Install the dependencies:
    \`\`\`bash
    npm install
    \`\`\`
4. Run it:
    \`\`\`bash
    npm start
    \`\`\`
`},{name:"usage",displayName:"Usage",description:"Guide on how to use the project",markdown:"## Usage 🛠️\n\n### Basic Usage 📝\nTo perform a basic task:\n```bash\npython main.py <command> <arguments>\n```\n**Example:**\n```bash\npython main.py run_analysis data.csv\n```\n\n### Advanced Usage 🦾\nFor more complex operations or customization:\n```bash\npython main.py --config config.yaml\n```\n\n### Additional Options 📌\n- `-h` `--help`: Display help message and usage information.\n- `--verbose`: Increase verbosity level for detailed output.\n- `--debug`: Enable debug mode for troubleshooting.\n",id:"54d50d22-55f1-4475-9703-1bc486c9e03e",originalMarkdown:"## Usage 🛠️\n\n### Basic Usage 📝\nTo perform a basic task:\n```bash\npython main.py <command> <arguments>\n```\n**Example:**\n```bash\npython main.py run_analysis data.csv\n```\n\n### Advanced Usage 🦾\nFor more complex operations or customization:\n```bash\npython main.py --config config.yaml\n```\n\n### Additional Options 📌\n- `-h` `--help`: Display help message and usage information.\n- `--verbose`: Increase verbosity level for detailed output.\n- `--debug`: Enable debug mode for troubleshooting.\n"},{name:"built-with",displayName:"Built With",description:"List of stuff used to build the project",markdown:`## Built With 🔧

> [!TIP]
> Add stuff using Badges 4 README.md

Badges 4 README.md: [alexandresanlim/Badges4-README.md-Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Scss](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-9575cd?logo=vite&logoColor=fff&style=for-the-badge)](#)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](#)
[![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)`,id:"ae0caa10-2115-4126-b3cb-2a36e368acea",originalMarkdown:`## Built With 🔧

> [!TIP]
> Add stuff using Badges 4 README.md

Badges 4 README.md: [alexandresanlim/Badges4-README.md-Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Scss](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-9575cd?logo=vite&logoColor=fff&style=for-the-badge)](#)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](#)
[![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)`},{name:"contributing",displayName:"Contributing",description:"Informs the user to check CONTRIBUTING.md",markdown:`## Contributing 🤝

Welcome Code Wizards & Witches! 🧙‍♂️🧙‍♀️

Your contributions fuel this repo! 🔥

_Let's show the power of Open-Source!_ 💪

<details>
    <summary>Why are open-source developers the sweetest folks in tech? 🍭</summary>
    <p> Because they believe in sharing not only code but also <i>smiles</i> 😁 and <i>love</i> 💓 through 1s and 0s!</p>
</details>

See [\`CONTRIBUTING.md\`](#) to get started.`,id:"1d47f7b8-5c86-41b0-9845-3f4630385959",originalMarkdown:`## Contributing 🤝

Welcome Code Wizards & Witches! 🧙‍♂️🧙‍♀️

Your contributions fuel this repo! 🔥

_Let's show the power of Open-Source!_ 💪

<details>
    <summary>Why are open-source developers the sweetest folks in tech? 🍭</summary>
    <p> Because they believe in sharing not only code but also <i>smiles</i> 😁 and <i>love</i> 💓 through 1s and 0s!</p>
</details>

See [\`CONTRIBUTING.md\`](#) to get started.`},{name:"current-contributors",displayName:"Current Contributors",description:"Table of all current contributors",markdown:`## Current Contributors 🧙‍♂️

This wouldn't exist if it weren't for these amazing developers! 🤩💖

[Emoji Key](https://allcontributors.org/docs/en/emoji-key) ✨

<!-- please use https://allcontributors.org/ to generate a contributor table with ease -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Special Thanks

- [**Michael Lee**](https://github.com/example) for extensive testing and bug reports.
- [**Sarah Miller**](https://github.com/example) for contributing to the feature roadmap and planning.`,id:"ffd7b0da-4cd5-4802-9710-8d2d05debcc5",originalMarkdown:`## Current Contributors 🧙‍♂️

This wouldn't exist if it weren't for these amazing developers! 🤩💖

[Emoji Key](https://allcontributors.org/docs/en/emoji-key) ✨

<!-- please use https://allcontributors.org/ to generate a contributor table with ease -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Special Thanks

- [**Michael Lee**](https://github.com/example) for extensive testing and bug reports.
- [**Sarah Miller**](https://github.com/example) for contributing to the feature roadmap and planning.`},{name:"acknowledgments",displayName:"Acknowledgments",description:"List of all the acknowledgements",markdown:`## Acknowledgments 💝

- [Readme Forge](https://readme-forge.github.io) - Creating README.md
- [Awesome README](https://github.com/matiassingers/awesome-readme) - Suggesting great tools`,id:"dd9fd405-080c-4182-9fc1-be7fd57ebb8b",originalMarkdown:`## Acknowledgments 💝

- [Readme Forge](https://readme-forge.github.io) - Creating README.md
- [Awesome README](https://github.com/matiassingers/awesome-readme) - Suggesting great tools`}],o=["basic","github","animated-basic"],a=[{id:"5108babc-bf35-44d5-a9ba-de08badfa80a",global:"github_username",value:"SenaThenu"},{id:"2d790a4d-7c9c-4e23-9c9c-5749c5fa7fdb",global:"github_repo_name",value:"readme-forge"},{id:"871c574c-be7d-4a23-832c-a34d740ed78e",global:"title",value:"Readme Forge"}],i={displayName:e,description:t,usedBlocks:n,availableBlockCategories:o,globals:a};export{o as availableBlockCategories,i as default,t as description,e as displayName,a as globals,n as usedBlocks};
