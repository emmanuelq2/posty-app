const markedModule = require('marked');
const marked = typeof markedModule.parse === 'function'
    ? markedModule
    : markedModule.marked;

function markdownToHtml(content) {
    return marked.parse(content || '');
}

module.exports = markdownToHtml;