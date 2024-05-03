import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
    books: [
        {id: "1", title: "Shawshank Redemption", author: "Gerry O Nichols"},
        {id: "2", title: "Harry Potter", author: "J.K. Rowling"},
        {id: "3", title: "The Alchemist", author: "Paulo Coelho"}
    ]
}

export const booksSlice = createSlice( {
    name: "books",
    initialState: initialState,
    reducers: {
        showBooksAction: ((state) => state),
        addBookAction: ((state, action) => {
            state.books.push(action.payload)
        }),
        deleteBookAction: (( state, action )=>{
            const title = action.payload;
            state.books = state.books.filter(book=> book.title != title)
        }),
        updateBookAction: (state, action) => {
            const { id, title, author } = action.payload;
            const bookToUpdate = state.books.find(book => book.id === id);
        
            if (bookToUpdate) {
                bookToUpdate.title = title;
                bookToUpdate.author = author;
            } else {
                // Handle case where book with provided id doesn't exist
                console.log(`Book with id ${id} not found.`);
            }
        }
    }
})
export const { showBooksAction, addBookAction, deleteBookAction, updateBookAction} = booksSlice.actions;
export default booksSlice.reducer;