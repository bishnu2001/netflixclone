const mongoose=require("mongoose");

const connectdb=async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`mongo db connected ${db.connection.host}`)
    } catch (error) {
        console.log(`mongodb error ${error.message}`)
    }
}
module.exports=connectdb;