const path=require('path');
const express= require('express');
require("../main/db/conn");
const ShortURL = require('./models/schema');
const app=express();
const port= process.env.PORT || 8000;

const staticPath=path.join(__dirname,'../public');
//console.log(staticPath);

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use('/',express.static(staticPath));

app.get('/',async(req,res)=>{
	const allData= await ShortURL.find();
	console.log(allData)
    res.render('index',{shortUrls: allData})
});

app.post('/short', async (req, res) => {
	const fullUrl=req.body.fullUrl
	console.log(fullUrl)
	// insert the record using the model
	const record = new ShortURL({
		full:fullUrl
	})
	
	await record.save();
	res.redirect('/')
});

app.get('/:shortid',async(req,res)=>{
	const shortid= req.params.shortid;
	const rec= await ShortURL.findOne({short:shortid})

	if(!rec)
	return res.sendStatus(404)

	rec.clicks++;
	await rec.save();
	res.redirect(rec.full)
})
app.listen(port,()=>{
    console.log("server is starting")
});