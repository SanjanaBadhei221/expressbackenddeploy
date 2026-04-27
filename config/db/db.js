const mongoose=require("mongoose")

const connectDB=async (retry=5,delay=5000) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,)
        console.log("DB connected")
    } catch (error) {
        console.log("failed to connectDB")
       if(retry<=0){
        console.log("we can't connect DB so We are closing")
        process.exit(1)
       }
       setTimeout(()=>{
        connectDB(retry-1,delay+5000)
       },delay)
    }
}

module.exports=connectDB