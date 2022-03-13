import React from 'react'

const NavBar = () => {
  return (

    <nav class="navbar navbar-dark bg-dark">

    <div className="container-fluid">
      <a className="navbar-brand">NAVBAR</a>
        <form className="d-flex">
          <input className="form-control me-2"
                 type="search" 
                 placeholder="Search"
                 aria-label="search"/>
                 <button class="btn btn-outline-success"
                 type="submit">Search</button>
           </form>      
      </div>
    </nav>
  );
};

export default NavBar;
