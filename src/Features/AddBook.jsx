import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBookAction } from './BooksSlice';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {id: numberOfBooks+1, title, author};
        dispatch(addBookAction(book));
        navigate("/show-books", {replace:true})
        
    } 
    return (
        <div>
            <h2 className='page-title'>Add Book to your Collection</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor= 'title'>Title:</label>
                    <input type = "text" name= "title" value = {title}
                    onChange={(e)=> setTitle(e.target.value)} required></input>
                </div>
                <div className='form-field'>
                    <label htmlFor= 'author'>Author:</label>
                    <input type = "text" name= "author" value = {author}
                    onChange={(e)=> setAuthor(e.target.value)} required></input>
                </div>
                <button type= "submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;