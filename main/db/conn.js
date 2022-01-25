const mongoose=require('mongoose');

const mongoPath='mongodb+srv://janhabi_2000:sbQMF7WMoWrTlG8w@cluster0.fbjea.mongodb.net/shortener?retryWrites=true&w=majority'

mongoose.connect(mongoPath,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
let db=mongoose.connection;
db.on('error',console.error.bind(console,'connection err'));
db.once('open',()=>{
    console.log("connection is successfull");  
});
/*sbQMF7WMoWrTlG8w
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
