import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import AddBook from '../Features/AddBook';
import BooksView from '../Features/BooksView';
import EditBook from '../Features/EditBook';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path = "/" element= {<Home></Home>}></Route>
                    <Route path = "*" element= {<Error></Error>}></Route>
                    <Route path = "/add-books" element= {<AddBook></AddBook>}></Route>
                    <Route path = "/show-books" element= {<BooksView></BooksView>}></Route>
                    <Route path = "/edit-book" element= {<EditBook></EditBook>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;