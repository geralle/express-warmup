const express = require('express')
const app = express()

app.get('/',function(request,response){
  response.send('hi practice2')
})

app.listen(3000, function(){
  console.log("server running...")
})
