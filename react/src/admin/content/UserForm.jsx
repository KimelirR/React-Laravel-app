import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";


const UserForm = () => {
  const navigate = useNavigate();
  let {id} = useParams();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState({error_list: []})
  const [loading, setLoading] = useState(false)
  const {setNotification} = useStateContext()

  if (id) {
    useEffect(() => {
      setLoading(true)
      axiosClient.get(`/users/${id}`)
        .then(({data}) => {
          setLoading(false)
          setUser(data)
        })
        .catch(() => {
          setLoading(false)
        })
    }, [])
  }

  const onSubmit = ev => {
    ev.preventDefault()
    if (user.id) {
      axiosClient.put(`/users/${user.id}`, user)
        .then(() => {
          setNotification('User was successfully updated')
          navigate('/table')
        })
        .catch(err => {
          const response = err.response;
          console.log(response)
          if (response && response.status === 422) {
            // setErrors(response.data.errors)
            setErrors({...errors, error_list: response.data.errors});
          }
        })
    } else {
      axiosClient.post('/users', user)
        .then(() => {
          setNotification('User was successfully created')
          navigate('/table')
        })
        .catch(err => {
          const response = err.response;
          console.log(response)
          if (response && response.status === 422) {
            setErrors({...errors, error_list: response.data.errors});
          }
        })
    }
  }
  return (
    <>
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-wrapper-before" />
          <div className="content-header row"></div>
          <div className="content-body">

            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4
                    className="card-title"
                    id="basic-layout-colored-form-control"
                  >
                    User Form
                  </h4>
                  <Link className="heading-elements-toggle">
                    <i className="la la-ellipsis-v font-medium-3" />
                  </Link>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li>
                        <Link data-action="collapse">
                          <i className="ft-minus" />
                        </Link>
                      </li>
                      <li>
                        <Link data-action="reload">
                          <i className="ft-rotate-cw" />
                        </Link>
                      </li>
                      <li>
                        <Link data-action="expand">
                          <i className="ft-maximize" />
                        </Link>
                      </li>
                      <li>
                        <Link data-action="close">
                          <i className="ft-x" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                      <div className="card-body">
                        {loading && (
                          <div className="text-center">Loading...</div>
                        )}
                        {!loading && (
                    <form className="form" onSubmit={onSubmit}>
                      <div className="form-body">
                        <h4 className="form-section">
                          <i className="ft-user" />{user.id && 'Update User'+' '+ user.name}{!user.id && 'New User'}
                        </h4>
                        <div className="form-group">
                          <label htmlFor="contactinput5">User Name</label>
                          <input
                            className="form-control border-primary"
                            type="text"
                            placeholder="Name"
                            value={user.name} onChange={ev => setUser({...user, name: ev.target.value})}
                          />
                        </div>
                        <span className='text-danger'>{errors.error_list.name}</span>

                        <div className="form-group">
                          <label htmlFor="contactinput5">Email</label>
                          <input
                            className="form-control border-primary"
                            type="email"
                            placeholder="Email"
                            value={user.email} onChange={ev => setUser({...user, email: ev.target.value})}
                          />
                        </div>
                        <span className='text-danger'>{errors.error_list.email}</span>

                        <div className="form-group">
                          <label htmlFor="contactinput6">Password</label>
                          <input
                            className="form-control border-primary"
                            type="password"
                            placeholder="Enter Password"
                            onChange={ev => setUser({...user, password: ev.target.value})}
                          />
                        </div>
                        <span className='text-danger'>{errors.error_list.password}</span>

                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            className="form-control border-primary"
                            type="password"
                            placeholder="Enter Confirm Password"
                            onChange={ev => setUser({...user, password_confirmation: ev.target.value})}
                          />
                        </div>
                        <span className='text-danger'>{errors.error_list.password_confirmation}</span>
                      </div>

                      <div className="form-actions right">
                        <Link to={'/table'} className="btn btn-danger mr-1">
                          <i className="ft-x" /> Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary">
                          <i className="la la-check-square-o" /> Submit
                        </button>
                      </div>
                    </form>
                    )}
                    </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm
