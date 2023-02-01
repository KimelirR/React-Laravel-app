import React, { Component } from "react";
import BookDataService from '../../book_functions/book.service';
import { withRouter } from '../../common/with-router';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


class DeleteBook extends Component {
    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
      }
    
      componentDidMount() {
           this.submit(this.props.router.params.id);
      }
      
      submit = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='container'>
                  <h1>Confirm to submit</h1>
                  <p>Are you sure to do this!</p>
                  <button className="btn btn-success" onClick={onClose}>
                      no
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteBook(id);
                      onClose();
                    }}
                  >
                    Yes, Delete it!
                  </button>
                </div>        
              );
            }
          });       
      };
       
      deleteBook(id) {    
        BookDataService.delete(id)
          .then(response => {
            if(response){

            const message = "Book deleted successfully!";
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
              this.props.router.navigate('/book/list');
            }
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
                
      render() {
      
        return (
            <div>
              {this.submit}
             </div>
        );  
      }
}


export default withRouter(DeleteBook);
