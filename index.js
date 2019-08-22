const pkg = require('./package.json')
const now = new Date()

const html = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${ pkg.name }</title>
    </head>
    <body>
        <h1>Built at <strong>${ now }</strong></h1>
    </body>
</html>
`.trim()

console.log(html)