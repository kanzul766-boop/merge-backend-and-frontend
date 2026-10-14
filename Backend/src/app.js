import express from "express"
import postModel from "./models/post.model.js"
import multer from "multer"
import uploadFile from "./services/storage.service.js"

const app = express()
app.use(express.json())

const storage = multer.memoryStorage()
const upload = multer({storage : storage})

app.get('/posts', async(req, res) => {
   const post= await postModel.find() //[{},{}] or []
//    const post= await postModel.findOne({title:"Post title"}) //{} or null
   res.status(200).json({message:"Posts fetched sucessfully", post})
})
app.post('/posts',upload.single("image") , async(req, res) => {
    const data= req.body
    const imgBuffer = req.file.buffer
    console.log(data , imgBuffer);

    const result = await uploadFile(buffer)
    console.log(result);
   
})

export default app