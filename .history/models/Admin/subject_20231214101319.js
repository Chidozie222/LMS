import mongoose from 'mongoose';


const Subject = new mongoose.Schema(
    {
        ClassName: String,
        SubjectTeacher: String,
    }
)
