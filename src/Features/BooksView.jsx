import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBookAction } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state)=> state.booksReducer.books);
    const dispatch = useDispatch();
    const handleDeleteBook = (title) => {
        dispatch(deleteBookAction(title))
    }
    return (
        <div>
          <h2 className='page-title'>List of Books</h2>  
          <table>
            <thead className='table-header'>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books && books.map((book) => {
                    const {id, title, author} = book;
                    return (
                        <tr key={id}>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to= "/edit-book" state= {{id, title, author}}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={()=> handleDeleteBook(title)}>Delete</button>
                            </td>
                        </tr>)  
                    })
                }
            </tbody>
          </table>
        </div>
    );
};

export default BooksView;