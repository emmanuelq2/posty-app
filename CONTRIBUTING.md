# Contributing to Posty App

Thank you for contributing.

## Who This Is For

These guidelines are for anyone adding or updating blog posts in this project.

## Prerequisites

- Node.js 18+ recommended
- npm

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

3. Open http://localhost:3000

## How Posts Work

- All posts are stored as Markdown files in `posts/`.
- File names are the post slug and must end in `.md`.
- A post at `posts/my-first-post.md` is available at `/post/my-first-post`.
- The app renders Markdown to HTML using `marked`.

## Add a Post (Recommended: App Form)

1. Start the app locally.
2. Go to `/new`.
3. Enter a title and Markdown content.
4. Submit the form.

The title is converted into a slug automatically:

- Lowercase only
- Non-alphanumeric characters are removed
- Spaces become hyphens

Example:

`My First Post!` becomes `my-first-post.md`.

## Add a Post (Manual File)

You can also create the Markdown file directly in `posts/`.

1. Create a new file such as `posts/my-topic.md`.
2. Write content in standard Markdown.
3. Save with UTF-8 encoding.

## Content Guidelines

- Use a clear title in the first line, for example `# Post Title`.
- Keep language concise and readable.
- Use headings to structure longer posts.
- Prefer fenced code blocks with language labels when sharing code.
- Avoid sensitive data, secrets, or personal information.

## Verify Before Submitting

1. Run the app.
2. Confirm your post appears on the home page.
3. Open the post page and check formatting.
4. Fix any spelling, broken links, or Markdown rendering issues.

## Contribution Workflow

1. Create a branch from `main`.
2. Add or update your post in `posts/`.
3. Commit with a clear message, for example:

```bash
git commit -m "docs: add post about markdown tips"
```

4. Push your branch.
5. Open a pull request with:
- A short summary of the new or changed post
- Screenshots if formatting/UI changed
- Any notes reviewers should know

## Questions

If anything is unclear, open an issue and describe what you are trying to contribute.