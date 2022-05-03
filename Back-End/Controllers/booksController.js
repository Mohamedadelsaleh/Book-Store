const Book = require('../Models/bookModel')

// controller to get all books from database
const getAllBooks = async (req, res, next) => {
    //this route will provide all of the books
    let books;
    try {
        books = await Book.find();
    }catch (err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message: 'No books found'});
    }else{
        return res.status(200).json({books})
    }
};

const addBooks = async (req, res, next) => {
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }catch (err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:'Unable to Add'})
    }else{
        return res.status(201).json({book})
    }
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    }catch (err){
        log.error(err);
    }

    if(!book){
        return res.status(400).json({message:"No book found"});
    }else{
        return res.status(200).json({book});
    }

};

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
        book = await book.save()
    }catch (err){
        console.log(err);
    };

    if(!book){
        return res.status(404).json({message:"Unable to update Book"})
    }else{
        return res.status(200).json({book})
    }

};


const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    }catch (err){
        log.error(err);
    }

    if(!book){
        return res.status(400).json({message:"Unable to Delete Book"});
    }else{
        return res.status(200).json({message:"Book successfully deleted"});
    }

};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;