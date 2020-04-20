// "type": "module" Must be included in the package.json check file
import mongoose from 'mongoose'; // This is my import from my mongoose package

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema // My Mongoose Schema

// Here are my constants for necessary information
const mongoDBUrl = 'localhost';
const mongoDBPort = '27017'
const mongoDBDatabase = 'StudentDB'

//Here is my Student Schema
const studentShema = new Schema({
    name: { type: "String", required: true}, // name is required
    address: { type: "String", required: true},
    age: { type: "Number", required: true},
    phone: { type: "Number", }
})

// Here is the Schema as a model in Mongoose
const Student = mongoose.model("Student", studentShema, "Students")

// The Acync Function with the Try Catch in it
const connectToDB = async() => {
    try {
        const connectionInfo = `mongodb://${mongoDBUrl}:${mongoDBPort}/${mongoDBDatabase}`;
        const mongoDBConfigObject = {useNewUrlParser: true, useUnifiedTopology: true}
        await mongoose.connect(connectionInfo, mongoDBConfigObject);
    }
    catch (err) {
        console.log(err); // To display in console the error
    }
}

const getAll = async() => {
    try {
        await Student.find().exec((err, studentCollection) => {
            if(err) {
                console.log(err);
            }
            console.log({ TreeCollection })
        })
    }
    catch (err) {
        console.log(err)
    }
}