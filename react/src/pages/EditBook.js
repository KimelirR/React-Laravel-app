import React, { Component } from "react";
import BookDataService from '../../book_functions/book.service';
import { withRouter } from '../../common/with-router';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EditBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.getBook = this.getBook.bind(this);
    this.updateBook = this.updateBook.bind(this);

    this.state = {
      currentBook: {
        id: null,
        title: '',
        price: '',
        author: '',
        editor: ''
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getBook(this.props.router.params.id);
  }


  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          title: title
        }
      };
    });
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          price: price
        }
      };
    });
  }

  onChangeAuthor(e) {
    const author = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          author: author
        }
      };
    });
  }

  onChangeEditor(e) {
    const editor = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          editor: editor
        }
      };
    });
  }

  getBook(id) {
    BookDataService.get(id)
      .then(response => {
        this.setState({
          currentBook: {
            id: response.data.id,
            title: response.data.title,
            price: response.data.price,
            author: response.data.author,
            editor: response.data.editor
          },
          message: ""
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateBook = async (e) => {
    e.preventDefault();

    await BookDataService.update(
      this.state.currentBook.id,
      this.state.currentBook
    )
      .then(response => {
        console.log(response.status);
        this.setState({
          message: "Book updated successfully!"
        });

        if(response.status === 200){
          const message = "Book updated successfully!";
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
        }    

      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {

    const { currentBook } = this.state;

    return (
      <>
       <Navbar/>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow">
              <div className="card-header">
                <h4>Edit
                  <Link to={'/book/list'} className="btn btn-primary btn-sm float-end">Back</Link>
                </h4>
              </div>

              <div className="card-body">

                <form onSubmit={this.updateBook}>
                  <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      onChange={this.onChangeTitle}
                      value={currentBook.title} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      id="price"
                      onChange={this.onChangePrice}
                      value={currentBook.price} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      onChange={this.onChangeAuthor}
                      value={currentBook.author} />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="editor">Editor</label>
                    <input
                      type="text"
                      className="form-control"
                      name="editor"
                      id="editor"
                      onChange={this.onChangeEditor}
                      value={currentBook.editor} />
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary float-start">Update</button>
                  </div>

                </form>
              </div>
              
              <div className="card-footer col-md-12">
                {/* To set Footer */}
              </div>
            </div>
          </div>
        </div>
      </div>
     </> 
    );
  }
}


export default withRouter(EditBook);
