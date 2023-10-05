import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser";
import { useEffect } from "react";
import { fetchUsersAsync } from "./usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  // console.log(dispatch);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  // how to get the store data in component
  // We have subscribe to the store data in comp
  const usersState = useSelector((state) => {
    // state is the store data
    console.log(state.users);
    return state.users;
  });

  if (usersState.isLoading) {
    return <div className="spinner-border text-success"></div>;
  }

  if(usersState.isError) {
    return(
      <div className="alert alert-danger">
        {usersState.status}
      </div>
    )
  }

  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <h2>Add user</h2>
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        <div className="row">
          {usersState.usersList.map((user) => {
            return(
              <div className="col-md-4" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2">Email: {user.email}</h6>
                  <p className="card-text">Phone: {user.phone}</p>
                </div>
              </div>
            </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Users;
