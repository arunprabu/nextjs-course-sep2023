import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  console.log("1. Program Started");
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  // How to connect to the rest api?
  // 1. What's the REST API URL? apiUrl
  // 2. What's the HTTP Method? GET
  // 3. What's the REST API Client Tool? axios (npm i axios)

  // When can i connect to the rest api?
  useEffect(() => {
    // this callback fn will be called after initial rendering
    // ideal place for you hit the rest api using axios
    console.log("3. Inside useEffect");
    // Also learn about using fetch api to hit rest api
    axios
      .get(apiUrl)
      .then((response) => {
        // handling successful response
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        // handling error response
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        // always executed
        setIsLoading(false);
      });
  }, []); // learn about dependency array

  console.log("2. Program Ended");
  return (
    <div>
      <h1>Users</h1>

      {isLoading && (
        <div
          className="spinner spinner-border text-success"
          role="status"
        ></div>
      )}

      {isError && (
        <div className="alert alert-danger">
          Some Error Occurred. Try again later!
        </div>
      )}

      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-6" key={user.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">User Id: #{user.id}</h5>
                  <p className="card-text">Name: {user.name}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phone}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
