import React, { useState } from 'react'

export default function SearchBox(props) {
    const [name,setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search/name/${name}`);
      };
    return (
      <form  className="search" onSubmit={submitHandler}>
      <div className="input-group w-100">
        <input
          type="text"
          className="form-control"
          style={{ width: "50%" }}
          placeholder="Search"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      </form>
    )
}



//  <form className="search" onSubmit={submitHandler}>
//  <div className="row">
//    <input
//      type="text"
//      name="q"
//      id="q"
//      onChange={(e) => setName(e.target.value)}
//    ></input>
//    <button className="primary" type="submit">
//      <i className="fa fa-search"></i>
//    </button>
//  </div>
// </form>