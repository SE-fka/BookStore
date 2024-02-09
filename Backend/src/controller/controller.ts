
import db from '../repository/db';

//Get all Notes

exports.getAllBooks = async(req, res) => {
    try {
        const allBooks =  await db.query("SELECT * FROM Book");
        res.json(allBooks.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Get all Search by title

exports.getSearch = async(req, res) => {
    try {
        const searchTerm = req.query.title;
        const query = "SELECT * FROM Book WHERE title ILIKE $1";
        const values = [`%${searchTerm}%`];
        const result = await db.query(query, values);
        res.json(result.rows);
      } catch (error) {
        console.error('Error searching books:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

//Get One book
exports.getOneBook = async(req,res) => {
    try {
        const { id } = req.params;
        const oneBook =  await db.query("SELECT * FROM Book WHERE book_id = $1", [id]);
        res.json(oneBook.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Get all Order

exports.getAllOrders = async(req, res) => {
    try {
        const allOrders =  await db.query("SELECT * FROM BookOrder");
        res.json(allOrders.rows);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Create a order
exports.createOrder = async(req, res) => {
     // Validate the incoming JSON data
     const { title, writer, image, price, tag } = req.body;
     console.log(req.body);
     if (!title || !writer || !image || !price || !tag) {
       return res.status(400).send('One of the title, or writer, or image, or price, or tag is missing in the data');
     }
   
     try {
       // try to send data to the database
       const query = `
         INSERT INTO BookOrder (title, writer, image, price, tag)
         VALUES ($1, $2, $3, $4, $5 )
         RETURNING order_id;
       `;
       const values = [title, writer, image, price, tag];
   
       const result = await db.query(query, values);
       res.status(201).send({ message: 'New Order created', albumId: result.rows[0].id });
     } catch (err) {
       console.error(err);
       res.status(500).send('some error has occured');
     }
}

//Delete a Order
exports.deleteOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteOrder = await db.query("DELETE FROM bookorder WHERE order_id = $1", [id]);
        res.json("Order has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}

//Get One book
exports.getOneOrder = async(req,res) => {
    try {
        const { id } = req.params;
        const oneOrder =  await db.query("SELECT * FROM BookOrder WHERE order_id = $1", [id]);
        res.json(oneOrder.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}
