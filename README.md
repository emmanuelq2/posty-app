# Posty App

A lightweight Node.js blog app that reads Markdown files from the posts folder, renders them to HTML, and lets you publish new posts from a web form.

## Features

- List all available posts from Markdown files.
- Render individual posts with clean formatting.
- Create new posts at /new and save them as .md files.
- Includes a sample post in posts/welcome.md.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the app:

http://localhost:3000

## Tech Stack

- Node.js
- Express
- EJS
- marked

## Notes

- Markdown posts are stored in the posts directory.
- New post titles are converted into URL slugs automatically.