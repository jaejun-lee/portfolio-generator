const generatePage = require('./src/page-template.js');
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.lenth);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

//console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');
})


