var express        =         require("express");
var app            =         express();
const port=process.env.PORT || 3000

app.get('/',function(req,res){
  res.sendFile("static/index.html", { root: __dirname });
});


app.use('/static', express.static('static'))

app.listen(port,function(){
  console.log("Started on PORT "+port);
})
