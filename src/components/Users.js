import axios from "axios";
import { useEffect, useState } from "react";
import "./Users.css";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
        setTimeout(() => {
          setLoading(!loading);
      }, 500);
      })
  },[]);
  //   console.log(users);
  return (
    <div className="users">
      {loading ? "Loading..": (
        <ul className="ull">
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/user/${user.id}`} className="users-link">
                  {user.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Users;
