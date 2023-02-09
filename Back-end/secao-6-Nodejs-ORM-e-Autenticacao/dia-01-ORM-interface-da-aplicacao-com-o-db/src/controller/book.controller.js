const BookServices = require('../service/book.service');

const err500Msg = 'Algo deu errado';

const getAll = async (_req, res) => {
    try {
        const books = await BookServices.getAll();
        return res.status(200).json(books);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: err500Msg });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookServices.getById(id);

        if (!book) return res.status(404).json({ message: 'Book not found' });

        return res.status(200).json(book);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: err500Msg });
    }
}

const createBook = async (req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
        const newBook = await BookServices.createBook(title, author, pageQuantity);

        return res.status(201).json(newBook);
    } catch(e) {
        console.log(e.message);
        res.status(500).json({ message: err500Msg });
    }
}

module.exports = {
    getAll,
    getById,
    createBook,
}