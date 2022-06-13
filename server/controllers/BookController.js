const db=require('../config/db')
class Book{
    async getBooks(){
        console.log('book_ctl')
        const books=await db.all('SELECT * FROM books')
        return(books.rows)
    }
    async putBook(book_name,book_genre,book_author,book_publisher){
        console.log(` bookname: ${book_name}, book_genre:${book_genre}, book author: ${book_author}, bookpublisher: ${book_publisher}`)
        db.query("INSERT into books(book_name,book_genre,book_author,book_publisher) VALUES ($1, $2,$3,$4)",[book_name,book_genre,book_author,book_publisher],(err,result)=>{
           return "inserted"
        }).catch(e=>{
            console.log(e)
            return e
        })

    }
    async updateBook(book_id,book_name,book_genre,book_author,book_publisher){
        db.query("UPDATE books SET book_name=$1, book_genre=$2, book_author=$3, book_publisher=$4 WHERE book_id=$5",[book_name,book_genre,book_author,book_publisher,book_id],(err,res)=>{
            return "updated"
        }).catch(e=>{
            console.log(e)
            return e
        })
    }
    async delBooks(book_id){
        db.query("DELETE FROM books WHERE book_id=$1",[book_id],(err,res)=>{
            return "deleted"
        }).catch(e=>{
            console.log(e)
            return e
        })
    }
}
module.exports=Book