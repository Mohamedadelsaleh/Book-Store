import React, { useEffect, useState } from 'react';
import './Book.css';
import axios from 'axios';
import Book from './Book';


const URL = 'http://localhost:5000/books';

const fetchHandler = async () =>{
    return await axios.get(URL)
            .then((res => res.data))
}


const Books = () => {

    const [books, setBooks] = useState();

    useEffect(() => {
        fetchHandler().then(data => setBooks(data.books))
    },[]);

    return (
        <div>
            <ul>
                {books && books.map((book,idx)=> (
                    <li className="book" key={idx}>
                        <Book book={book} />
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default Books