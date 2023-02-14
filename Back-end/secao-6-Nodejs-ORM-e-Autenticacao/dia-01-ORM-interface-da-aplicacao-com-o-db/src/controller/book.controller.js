const BookServices = require('../service/book.service');

const err500Msg = 'Algo deu errado';

const getAll = async (req, res) => {
    try {
        const { author } = req.query;

        let books;

        if (author) {
            books = await BookServices.getByAuthor(author);
        } else {
            books = await BookServices.getAll();
        }
       
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

const getByAuthor = async (req, res) => {
    try {
        const { author } = req.query;

        const escritor = await BookServices.getByAuthor( author);

        if (!escritor) return res.status(404).json({ message: 'Author not found' });

        return res.status(200).json(escritor);
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

const updateBook = async (req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
        const { id } = req.params;

        const updatedBook = await BookServices.updateBook(id, {title, author, pageQuantity});

        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        
        return res.status(200).json({ message: 'Livro atualizado com sucesso' }); 
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: err500Msg });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const delBook = await BookServices.deleteBook(id);

        if (!delBook) return res.status(404).json({ message: 'Book not found' });

        return res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: err500Msg });
    }
};


module.exports = {
    getAll,
    getById,
    getByAuthor,
    createBook,
    updateBook,
    deleteBook,
}