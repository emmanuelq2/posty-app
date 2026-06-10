const express = require('express');
const fs = require('fs');
const path = require('path');
const markdown = require('../utils/markdown');

const router = express.Router();
const postsDir = path.join(__dirname, '../../posts');

// List all posts
router.get('/', (req, res) => {
    fs.readdir(postsDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading posts directory');
        }

        const posts = files
            .filter((file) => file.endsWith('.md'))
            .map((file) => ({
                fileName: file,
                slug: file.replace(/\.md$/, ''),
                title: file.replace(/\.md$/, '').replace(/-/g, ' ')
            }));

        res.render('index', { posts });
    });
});

// New post form
router.get('/new', (req, res) => {
    res.render('new');
});

// Render a specific post by slug
router.get('/post/:slug', (req, res) => {
    const safeSlug = req.params.slug.replace(/[^a-zA-Z0-9-_]/g, '');
    const postPath = path.join(postsDir, `${safeSlug}.md`);

    fs.readFile(postPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('Post not found');
        }

        const content = markdown(data);
        res.render('post', { content, slug: safeSlug });
    });
});

// Handle new post submission
router.post('/new', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('Title and content are required');
    }

    const slug = title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');

    const postPath = path.join(postsDir, `${slug}.md`);

    fs.writeFile(postPath, content, 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error saving post');
        }

        res.redirect('/');
    });
});

module.exports = router;