const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginpage")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("failed to connect");
})

const LogInScheme = new mongoose.Schema({
    username:{
        type:String,
        require:true
        
    },
    password:{
        type:String,
        require:true
        
    },
    password1:{
        type:String,
        require:true
        
    },
    email:{
        type:String,
        require:true
        
    }
})
const collection =new mongoose.model("collection1",LogInScheme)

module.exports=collection

