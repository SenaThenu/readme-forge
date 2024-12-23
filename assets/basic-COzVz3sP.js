const e="basic",n="Basic",t=[{name:"title-and-description",displayName:"Title & Description",description:"Section with the title, description and logo",markdown:`<div align="center">
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
</div>`},{name:"share",displayName:"Share",description:"Social media share links",markdown:`<div align="center">
  
  <strong>Share</strong>

  <a href="https://x.com/intent/tweet?hashtags=opensource%2Creadme&text=Check%20this%20out:%20{{title}}!&url=https%3A%2F%2Fgithub.com%2F{{github_username}}%2F{{github_repo_name}}">
    <img src="https://img.shields.io/badge/Share_on_X-%23000000.svg?logo=X&logoColor=white" alt="Share on X" />
  </a>
  
</div>`},{name:"toc",displayName:"Table of Content",description:"Easy navigation to sections",markdown:`<details>

<summary><strong>Table of Contents 📜</strong></summary>

{{auto_generated_toc}}

</details>`},{name:"demo",displayName:"Demo",description:"Live example or features in action",markdown:`## Demo 🧑‍💻

Experience the features in action with our live demo!

[insert a link or a video]
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
`},{name:"features",displayName:"Features",description:"A brief list of all the features",markdown:`## Features ✨

* **Code Search:** Quickly find code across your repositories.
* **Pull Requests:** Collaborate efficiently on code changes.
* **Issues:** Track bugs, feature requests, and other tasks.
* **Projects:** Organize and prioritize work.
* **Wikis:** Create and share documentation.
`},{name:"in-depth-features",displayName:"In-Depth Features",description:"A deep description of all the features",markdown:`## Features In Depth 🧠

### 1. User Authentication
- Secure login and registration with email and password.
- OAuth integration for third-party logins (Google, Facebook).

### 2. Real-Time Notifications
- Get notified instantly about important events and updates.
- Push notifications for mobile and desktop users.

### 3. Dynamic Content Management
- Admin panel for managing content dynamically.
- Ability to create, update, and delete posts.

### 4. Customizable Themes
- Choose from a variety of pre-defined themes.
- Option to create custom themes and save preferences.

### 5. Analytics Dashboard
- Real-time statistics and metrics for user activity.
- Visual graphs and charts for easy data interpretation.
`},{name:"usage",displayName:"Usage",description:"Guide on how to use the project",markdown:"## Usage 🛠️\n\n### Basic Usage 📝\nTo perform a basic task:\n```bash\npython main.py <command> <arguments>\n```\n**Example:**\n```bash\npython main.py run_analysis data.csv\n```\n\n### Advanced Usage 🦾\nFor more complex operations or customization:\n```bash\npython main.py --config config.yaml\n```\n\n### Additional Options 📌\n- `-h` `--help`: Display help message and usage information.\n- `--verbose`: Increase verbosity level for detailed output.\n- `--debug`: Enable debug mode for troubleshooting.\n"},{name:"built-with",displayName:"Built With",description:"List of stuff used to build the project",markdown:`## Built With 🔧

> [!TIP]
> Add stuff using Badges 4 README.md

Badges 4 README.md: [alexandresanlim/Badges4-README.md-Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Scss](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-9575cd?logo=vite&logoColor=fff&style=for-the-badge)](#)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=for-the-badge)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](#)
[![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](#)`},{name:"feedback",displayName:"Feedback",description:"Providing feedback on the project",markdown:`## Feedback 💬

We value your feedback and are constantly working to improve the project. If you have any suggestions, issues, or comments, please share them with us.

[**Open an Issue**](https://github.com/{{github_username}}/{{github_repo_name}}) | **Email**: contact@example.com
`},{name:"keyboard-shortcuts",displayName:"Keyboard Shortcuts",description:"Table of all the keyboard shortcuts",markdown:`## Keyboard Shortcuts ⌨️

| **Shortcut**              | **Action**                     |
|---------------------------|--------------------------------|
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Create a new file |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Save the current file |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Save all |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo the last action |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | Redo the last undone action |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | Open the search bar |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Open the replace tool |
| <kbd>Ctrl</kbd> + <kbd>P</kbd> | Print the document |
| <kbd>Ctrl</kbd> + <kbd>Tab</kbd> | Switch between open tabs |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Close the current tab |
| <kbd>F11</kbd> | Toggle full-screen mode |

Use these shortcuts to speed up your workflow and enhance productivity!
`},{name:"api-reference",displayName:"API Reference",description:"List of all API endpoints and request params",markdown:`## API Reference 📚

Here's a detailed list of all the available API endpoints, request parameters, and responses.

### Base URL 🔗

The base URL for all API requests is:

\`\`\`web
https://api.yourproject.com/v1
\`\`\`

### Authentication 🔒

To authenticate, include the following header in your API requests:

\`\`\`web
Authorization: Bearer <your-api-token>
\`\`\`

You can obtain an API token by logging into your account and visiting the **API Tokens** section.

### Endpoints 📍

#### Get All Posts

**Endpoint:** \`GET /posts\`

**Description:** Fetches a list of all posts.

**Query Parameters:**

| Parameter  | Type   | Description             |
|------------|--------|-------------------------|
| \`page\`     | \`number\` | The page number (default: 1) |
| \`limit\`    | \`number\` | The number of posts to fetch per page (default: 10) |

**Response:**

\`\`\`json
{
  "data": [
    {
      "id": 1,
      "title": "Post Title",
      "content": "Post content goes here.",
      "author": "Author Name",
      "created_at": "2024-12-01T12:00:00Z"
    },
    ...
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
\`\`\`

#### Create a New Post

**Endpoint:** \`POST /posts\`

**Description:** Creates a new post.

**Request Body:**
\`\`\`json
{
  "title": "New Post Title",
  "content": "Content of the new post.",
  "author": "Author Name"
}
\`\`\`

**Response:**

\`\`\`json
{
  "id": 101,
  "title": "New Post Title",
  "content": "Content of the new post.",
  "author": "Author Name",
  "created_at": "2024-12-15T10:00:00Z"
}
\`\`\`
`},{name:"contributing",displayName:"Contributing",description:"Informs the user to check CONTRIBUTING.md",markdown:`## Contributing 🤝

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

> [!TIP]
> Use allcontributors to generate a contributor table with ease:

https://allcontributors.org/

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Special Thanks

- [**Michael Lee**](https://github.com/example) for extensive testing and bug reports.
- [**Sarah Miller**](https://github.com/example) for contributing to the feature roadmap and planning.`},{name:"sponsors",displayName:"Sponsors",description:"Info on all the project sponsors",markdown:`## Sponsors 💖

We are grateful for the support from our amazing sponsors. Their contributions help us continue to improve and maintain the project.

### Platinum Sponsors 🤍💞

| **Name**          | **Website**                    |
|-------------------|---------------------------------|
| TechCorp Inc.     | [techcorp.com](https://techcorp.com)  |
| DevSolutions Ltd. | [devsolutions.com](https://devsolutions.com) |

### Gold Sponsors 💛

| **Name**          | **Website**                    |
|-------------------|---------------------------------|
| CodeMaster Co.    | [codemaster.com](https://codemaster.com) |
| InnovateTech      | [innovate-tech.com](https://innovate-tech.com) |

### Silver Sponsors 🩶

| **Name**          | **Website**                    |
|-------------------|---------------------------------|
| WebDev Solutions  | [webdevsolutions.com](https://webdevsolutions.com) |
| CloudStream LLC   | [cloudstream.com](https://cloudstream.com) |

### Become a Sponsor 🙌

Interested in supporting the project? Check out our [Sponsorship Page](https://github.com/sponsors/{{github_username}}) for more information on how you can contribute.`},{name:"acknowledgments",displayName:"Acknowledgments",description:"List of all the acknowledgements",markdown:`## Acknowledgments 💝

- [Readme Forge](https://readme-forge.github.io) - Creating README.md
- [Awesome README](https://github.com/matiassingers/awesome-readme) - Suggesting great tools`},{name:"faq",displayName:"FAQ",description:"Frequently Asked Questions",markdown:`## FAQ 🤔

Here are some frequently asked questions about the project.

### What is this project about?

This project is a web application designed to help users manage tasks, collaborate with teams, and track progress in real time. It offers features like task assignment, progress tracking, and team communication.

### How do I get started?

To get started, follow the steps outlined in the [Getting Started](#getting-started) section. You'll need to clone the repository, install dependencies, and run the app locally.

### Is there a mobile version of the app?

Currently, the project is designed for desktop use only. However, we are working on a mobile version, which will be available in future updates.

### How can I contribute to this project?

We welcome contributions! Check out the [Contributing Guidelines](https://github.com/{{github_username}}/{{github_repo_name}}/blob/main/CONTRIBUTING.md) to learn how you can get involved.

### How do I report a bug?

If you find a bug, please open an issue on our [GitHub Issues page](https://github.com/{{github_username}}/{{github_repo_name}}/issues). Provide as much detail as possible to help us resolve the issue quickly.

### How can I contact the project maintainers?

You can reach the maintainers by opening an issue on GitHub or by sending an email to [support@yourproject.com](mailto:support@yourproject.com).`}],o={name:e,displayName:n,blocks:t};export{t as blocks,o as default,n as displayName,e as name};
