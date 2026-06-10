const { marked } = require('marked');

function markdownToHtml(content) {
    return marked.parse(content || '');
}

module.exports = markdownToHtml;