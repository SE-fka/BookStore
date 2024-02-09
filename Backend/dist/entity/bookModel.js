module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        title: {
            type: Sequelize.STRING
        },
        writer: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.NUMBER
        },
        tag: {
            type: Sequelize.STRING
        }
    });
    return Book;
};
//# sourceMappingURL=bookModel.js.map