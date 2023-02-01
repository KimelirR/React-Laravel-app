import React, { Component } from "react";
import BookDataService from '../../book_functions/book.service';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.saveBook = this.saveBook.bind(this);
    
    this.state = {
      title:'',
      price:'',
      author:'',
      editor:''
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangeEditor(e) {
    this.setState({
      editor: e.target.value
    });
  }


  saveBook = async(e) =>  {
    e.preventDefault();

    var data = {
      title: this.state.title,
      price: this.state.price,
      author: this.state.author,
      editor: this.state.editor
    };

    if (this.state.title === "" 
            || this.state.price === "" 
            || this.state.author === "" 
            || this.state.editor === "") 
    {
      alert("ALl the fields are mandatory!");
      return;
    } 

    await BookDataService.create(data)
      .then(response => {
        this.setState({
          title: response.data.title,
          price: response.data.price,
          author: response.data.author,
          editor: response.data.editor
        });
        console.log(response);

    const message = 'Book Created';
        toast.success(message, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        
      })
      .catch(e => {
        console.log(e);
      });

      this.setState({
        title:'',
        price:'',
        author:'',
        editor:'',
        message : ''
      }); 
  }


  render() {
    return (
      <>
       <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header">
                <h4>Add Books
                  <Link to={'/book/list'} className="text-primary known-link float-end">Back</Link>
                </h4>
              </div>

              <div className="card-body">

                <form onSubmit={this.saveBook}>
                  <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      onChange={this.onChangeTitle}
                      value={this.state.title} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      id="price"
                      onChange={this.onChangePrice}
                      value={this.state.price} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      onChange={this.onChangeAuthor}
                      value={this.state.author} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="editor">Editor</label>
                    <input
                      type="text"
                      className="form-control"
                      name="editor"
                      id="editor"
                      onChange={this.onChangeEditor}
                      value={this.state.editor} />
                  </div>

                  <div className="form-group col-md-6 mb-3">
                    <button type="submit" className="btn btn-primary btn-sm float-start">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}
