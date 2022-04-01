import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'reactstrap';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});


  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);
  console.log(typeof user.address);
  return (
    <div className="user">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Web Site</th>
            {/* <th>Address</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            {/* <td>{city}</td> */}
          </tr>
        </tbody>
      </Table>
      {/* id : {user.name} */}
    </div>
  );
}

export default User;
