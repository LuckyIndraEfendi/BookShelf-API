const ModelBooks = require('../models/books')

const getBooks = async (req, res,next) => {
    try {
        const [books] = await ModelBooks.getAllBooks()
        res.json({
            status : "success",
            message : "GET Anime Details",
            data : books
        });
     }catch(err){
        res.status(500).json({
            status : "Server Error",
            message : err
        })
     }
}
const bookPost =  async (req, res,next) => {
    const {body} = req

    if(!body.judul_buku || !body.pengarang || !body.description){
        return res.status(400).json({
            status : "Bad Request",
            message : "Data Tidak Terisi Semua, Mohon untuk Melengkapi Data",
            data : null
        })
    }
    try {
     await ModelBooks.createNewBooks(body) //Menerima Paramater dateri body payload
        res.json(
            {
                status : 'success',
                message : 'Post User Success',
                data : body
            }
        )
    }catch (err){
        res.status(500).json({
            status : "Server Error",
            message : err
        })
       
    }

}
const putBooks = async (req,res) =>{
    const {body} = req
    const id  = parseInt(req.params.id)

 try {

    await ModelBooks.createNewBooks(body,id)
    res.json(  {
        status : 'success',
        message : 'Post User Success',
        data : {
            id: id,
            ...body
        }
    })
 }catch(err) {
    res.status(500).json({
        status : "Server Error",
        message : err
    })
 }
  
}

const deleteBooks = async (req,res) =>{
try {
    const id  = parseInt(req.params.id)
    await ModelBooks.deleteBooks(id)
    res.send({
        status : 'success',
        message : 'Delete User Success',
        data : null
    })
}catch(err){
    res.status(500).json({
        status : "Server Error",
        message : err
    })
}
 
}

module.exports = {bookPost,getBooks,putBooks,deleteBooks}