const axios = require("axios");

function getExams(win) {
    const axios = require("axios");
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            let output = '';
            response.data.forEach(post => {
                output += `<li>${post.title}</li>`;
            });
            return win.webContents.on('did-finish-load', () => {
                win.webContents.executeJavaScript(`
                  document.getElementById('posts').innerHTML = '${output}';
                `);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = {getExams}

