import express from "express"
import postModel from "./models/post.model.js"
import multer from "multer"
import uploadFile from "./services/storage.service.js"

const app = express()
app.use(express.json())

const storage = multer.memoryStorage()
const upload = multer({storage : storage})

app.get('/posts', async(req, res) => {
   const post= await postModel.find()
   res.status(200).json({message:"Posts fetched successfully", post})
})

app.post('/posts', upload.single("image"), async(req, res) => {
    try {
        const data = req.body
        
        // 1. Ensure a file was actually uploaded to avoid crashes
        if (!req.file) {
            return res.status(400).json({ message: "No image file uploaded" })
        }

        const imgBuffer = req.file.buffer
        console.log(data, imgBuffer);

        // 2. Fixed: Pass 'imgBuffer' instead of 'buffer'
        const result = await uploadFile(imgBuffer)
        console.log(result);

        // 3. Save to database and send a response back to the client
        const newPost = await postModel.create({
            desc: data.desc,
            image: result.url // Or however your storage service returns the URL
        })
        
        res.status(201).json({ message: "Post created successfully", post: newPost })

    } catch (error) {
        console.error("Error creating post:", error)
        res.status(500).json({ message: "Internal server error", error: error.message })
    }
})

export default app
