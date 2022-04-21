import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAllUsers } from "../../modules/authManager";
import { Link } from "react-router-dom";

const UserList = () => {
    const [userProfiles, setUserProfiles] = useState([]);

    useEffect(() => {
        getAllUsers().then((data) => setUserProfiles(data))
    }, []);

    return (
        <Table>
            <thead>
          <tr>
            <th>#</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Display Name</th>
            <th>Email</th>
            <th>Member Since</th>
            <th>Access Level</th>
            <th>Details</th>
          </tr>
          </thead>
          <tbody>
              {userProfiles.map((user, i) => {
                  return <tr>
                      <th scope="row">{i+1}</th>
                      <td><img src={`${user.imageUrl}`} /></td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>{user.createDateTime}</td>
                      <td>{user.userType?.name}</td>
                      <td><Link to={`/userProfiles/details/${user.id}`}>Details</Link></td>
                      </tr>
              })}
          </tbody>
        </Table>
    )
}
export default UserList