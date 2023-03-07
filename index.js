const express = require("express")
const app =express()
const path = require("path")
const hbs = require("hbs")
const collection=require("./mongodb")

const templatePath =path.join(__dirname,'../templates')
const { template } = require("handlebars")

app.use(express.json())
app.set("view engine","hbs")
app.set("view", templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
res.render("login.html")
})

app.get("/signup",(req,res)=>{
	res.render("signup.html")
	})

	app.post("/signup", async(req,res)=>{
		const data={
			username:req.body.username,
			password:req.body.password
		}
		await collection.insertMany([data])
		res.render("index.html")

	})

app.listen(3000,()=>{
	console.log(
		"port connected"
	);
})
