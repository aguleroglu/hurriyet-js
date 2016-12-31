
var hurriyet = require("./index.js")


var api = hurriyet("327c396d84c9491982f32e7c3625f908");

// api.articles(function(res){

//     console.log(res.length);

// });

// api.article('40322757',function(res){

//     console.log(res);

// });

// api.columns(function(res){

//     console.log(res);

// });

// api.column("40321556",function(res){

//     console.log(res);

// })

api.search('hackathon',{top:1},function(res){
    console.log(res);
})