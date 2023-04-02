const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(cors())

const PORT = process.env.PORT || 8080

const middlewareAuth = require('./middleware/auth')
app.use(express.json())
const books = require('./routers/books')
app.use(middlewareAuth)
const upload = require('./middleware/multer')
app.use(express.static("public"))

app.use('/books', books)
app.post("/upload",upload.single("photo"),(req,res)=>{
    res.json(
        {
            message: "Upload Berhasil"
        }
    )
})

app.use((err,req,res,next)=>{
    res.json({
        message:  err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})