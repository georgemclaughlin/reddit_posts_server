var snoowrap = require('snoowrap');

function createSnoowrap(credentials) {
    return new snoowrap(credentials);
}

function titleBreakdown(title) {
    var words = title.split(' ');
    return words.map(word => word.replace(/[^a-zA-Z]/g, "").toLowerCase());
}


module.exports = {
    createSnoowrap,
    titleBreakdown
};