const express = require('express')
const app = express()
const styleCss = require('./add_head')
const style = require('./add_head')

app.get('/',function(req,res){
    
res.send(`
${style(`Home`)}
  ${styleCss(`
  body {color:red}
  
  `)}
  
    <body>
        <h1>Projects</h1>
        <p>This is a skills page</p>
        <p>This is a skills page</p>
    </body>
`)
}) 

app.listen(3002,function(){
    console.log('new projects');
})