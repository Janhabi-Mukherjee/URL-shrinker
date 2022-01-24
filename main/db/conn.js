const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/shortner',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
let db=mongoose.connection;
db.on('error',console.error.bind(console,'connection err'));
db.once('open',()=>{
    console.log("connection is successfull");  
});
/*
async()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/shortner', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connection is successfull");
    }
    catch(e){
        console.log("no connection ");
    }
}*/
