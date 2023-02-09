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

module.exports = {
    getAll,
    
}