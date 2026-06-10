# Simple Node.js Blog App

This is a simple blog application built with Node.js and Express that serves Markdown posts from a designated folder. The application allows users to view a list of posts, read individual posts, and add new posts through a form.

## Project Structure

```
posty
├── posts
│   └── welcome.md
├── src
│   ├── server.js
│   ├── routes
│   │   └── posts.js
│   ├── views
│   │   ├── index.ejs
│   │   ├── post.ejs
│   │   └── new.ejs
│   └── utils
│       └── markdown.js
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/posty.git
   cd posty
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Features

- List all Markdown posts available in the `posts` folder.
- View individual posts rendered from Markdown to HTML.
- Add new posts using a simple form.

## Sample Post

The `posts/welcome.md` file contains a sample Markdown post that is served by the application. You can modify this file to add your own content.

## Dependencies

- Express: A web framework for Node.js.
- EJS: A templating engine for rendering HTML views.
- Markdown parsing library (e.g., marked or markdown-it) for converting Markdown to HTML.

## License

This project is licensed under the MIT License. Feel free to modify and use it as you wish.