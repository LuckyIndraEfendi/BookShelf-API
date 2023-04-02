const database = require('../config/database')

const getAllBooks = (req,res) => {
    const SQLusers = 'SELECT * FROM books';

    return database.execute(SQLusers)
}

const createNewBooks = (body) => {
    const SQLusers = `INSERT INTO books (judul_buku,pengarang,description) VALUES ("${body.judul_buku}","${body.pengarang}","${body.description}")`;

    return database.execute(SQLusers)
}

const updateBooks = (body,idUser) => {
    const SQLusers = `UPDATE books SET judul_buku = "${body.judul_buku}",pengarang = "${body.pengarang}",description = "${body.description}" WHERE id = ${idUser}`;

    return database.execute(SQLusers)
}

const deleteBooks = (idUser) => {
    const SQLusers = `DELETE FROM books WHERE id = ${idUser}`;
    return database.execute(SQLusers)
}

module.exports = {getAllBooks,createNewBooks,updateBooks,deleteBooks}