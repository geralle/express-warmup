const express = require('express')
const app = express()

app.get('/',function(request, response){
  response.send('hi practice3')
})

app.listen(3000,function(){
  console.log("server running...")
})
