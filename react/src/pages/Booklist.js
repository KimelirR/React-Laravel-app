//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BookDataService from '../../book_functions/book.service';
import Navbar from '../Navbar/Navbar';

class Booklist extends Component {

    
    state = {
        books: [],
        loading: true,
    };

    async componentDidMount() {
        const response = await BookDataService.getAll();
        if (response.status === 200) {
            this.setState({
                books: response.data.data,
                loading: false,
            });
        }
    }


    render() {

        let bookdetail = '';
        if (!this.state.loading) {

            bookdetail = this.state.books.map(({ id, title, price, author, editor }, index) => {
                return (
                    <tr key={index}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td>{author}</td>
                        <td>{editor}</td>
                        <td>
                            <Link to={`/edit/book/${id}`} className="btn btn-success btn-sm">
                                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                            </Link>
                        </td>
                        <td>
                            <Link to={`/delete/book/${id}`} className="btn btn-danger btn-sm">
                                <i className="fa-trash fa-solid fa-pen-to-square"></i>
                            </Link>
                        </td>
                    </tr>
                );
            });

        }
        else {
            bookdetail = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>;
        }

        return (
    <>
       <Navbar/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="card-header">
                                <h4>View Books
                                    <Link to={'/book/store'} className="btn btn-primary btn-sm float-end">Add Book</Link>
                                </h4>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Author</th>
                                            <th>Editor</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookdetail}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}


export default Booklist;