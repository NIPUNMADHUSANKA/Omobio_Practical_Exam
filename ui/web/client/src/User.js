import React from 'react'


function User() {
  return (
    <div width="100vw">
     
      <h1 style={{color:"green"}}> User List </h1>
  
    <br></br>
      <table width="100%">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
          </tr>
        </thead>

        <tbody>
          
              <tr key={localStorage.getItem("ID")}>
                  <td>{localStorage.getItem("ID")}</td>
                  <td>{localStorage.getItem("Name")}</td>
                  <td>{localStorage.getItem("Email")}</td>
                  <td>{localStorage.getItem("Username")}</td>
                  
                </tr>
  
        </tbody>
      </table>

    </div>
  )
}

export default User