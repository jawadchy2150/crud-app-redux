import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBookAction } from './BooksSlice';

const EditBook = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.title);

    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(updateBookAction({id, title, author}));
        navigate("/show-books", {replace:true})
    }
    return (
        <div>
            <h2 className='page-title'>Edit your Book</h2>
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
                <button type= "submit">Update</button>
            </form>
        </div>
    );
};

export default EditBook;