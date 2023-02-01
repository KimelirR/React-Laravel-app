import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Customizer from '../Customizer';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

const Table = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification} = useStateContext()

  useEffect(() => {
    getUsers();
  }, [])

  const onDeleteClick = user => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }
    axiosClient.delete(`/users/${user.id}`)
      .then(() => {
        setNotification('User was successfully deleted')
        getUsers()
      })
  }

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-wrapper-before" />
          <div className="content-header row">
            <div className="content-header-left col-md-4 col-12 mb-2">
              <h3 className="content-header-title">Users Table</h3>
            </div>
            <div className="content-header-right col-md-8 col-12">
              <div className="breadcrumbs-top float-md-right">
                <div className="breadcrumb-wrapper mr-1">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/users/new"} className='btn btn-success'>Add User</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">DataTables</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      DataTable
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dom">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Users</h4>
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
                      <div className="card-body card-dashboard">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered dom-jQuery-events">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Create Date</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            {loading && (
                              <tbody>
                                <tr>
                                  <td colSpan="5" className="text-center">
                                    Loading...
                                  </td>
                                </tr>
                              </tbody>
                            )}
                            {!loading && (
                              <tbody>
                                {users.map((u) => (
                                  <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.created_at}</td>
                                    <td className="btn-group">
                                      <Link
                                        className="btn btn-outline-success"
                                        to={"/users/" + u.id}
                                      >
                                        Edit
                                      </Link>
                                      &nbsp;
                                      <button
                                        className="btn btn-outline-danger"
                                        onClick={(ev) => onDeleteClick(u)}
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            )}
                            <tfoot>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Create Date</th>
                                <th>Actions</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* DOM - jQuery events table */}
          </div>
        </div>
      </div>
      <Customizer />
    </>
  );
}

export default Table
