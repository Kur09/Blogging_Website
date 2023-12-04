const mongoose = require("mongoose")

const connectDatabase =async  () => {

   // await mongoose.connect('mongodb+srv://keyur:1234@cluster1.ifdqa3q.mongodb.net/?retryWrites=true&w=majority' ,{useNewUrlParser : true})
   await mongoose.connect('mongodb+srv://jainam:qwert@blog.u7ewmkw.mongodb.net/?retryWrites=true&w=majority' ,{useNewUrlParser : true})



    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase