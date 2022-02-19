const express=require('express');
const app = express();
const cors=require("cors");
app.use(express.json());

app.use(
    cors({
        origin:""
    })
)

const TeacherController = require('./controllers/teacher.controller');
const UserController = require('./controllers/class.controller');
app.use('/teacher',TeacherController);
app.use('/class',UserController);

module.exports=app;