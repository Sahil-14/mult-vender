import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { deleteUser, listUsers } from "../actions/userActions";
import { USER_DETAILS_RESET } from "../constants/userConstants";

 const UserListScreen =({history}) => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div className="content-wrapper">
      
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row">
        <div className="col-md-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Users</p>
              <div className=" table-responsive table-striped table-hover">
                <table id="recent-purchases-listing" className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>SELLER</th>
                      <th>ADMIN</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td >{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.isSeller ? "YES" : " NO"}</td>
                      <td>{user.isAdmin ? "YES" : "NO"}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info btn-sm mr-1"
                          onClick={() => history.push(`/user/${user._id}/edit`)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteHandler(user)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}


export default withRouter(UserListScreen);