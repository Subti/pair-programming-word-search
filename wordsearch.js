const wordSearch = (letters, word) => {
    const numCols = letters[0].length;
    const numRows = letters.length;

    for (let j = 0; j < numCols; j++) {
        let col = '';
        for (let i = 0; i < numRows; i++) {
            col += letters[i][j];
        }
        if (col.includes(word)) {
            return true;
        }
    }

    for (let i = 0; i < numRows; i++) {
        const row = letters[i].join('');
        if (row.includes(word)) {
            return true;
        }
    }

    return false;
};

module.exports = wordSearch;
