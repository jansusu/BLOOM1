import React from "react";
import "./admin.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="col-lg-3 side"> */}
        <h2>
          <b>Dashboard</b>
        </h2>
        <div className="sidepa">
          <h2>
            <b>Men</b>
          </h2>
          <div className="dropdown">
            <p>
              <a className="lin" href="/upload">
                Upload
              </a>
            </p>
            <p>
              <a className="lin" href="/update">
                Update
              </a>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>
            <b>Women</b>
          </h2>
          <div className="dropdown">
            <p>
              <a className="lin" href="/wupload">
                Upload
              </a>
            </p>
            <p>
              <a className="lin" href="/wupdate">
                Update
              </a>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>
            <b>Kids</b>
          </h2>
          <div className="dropdown">
            <p>
              <a className="lin" href="/kupload">
                Upload
              </a>
            </p>
            <p>
              <a className="lin" href="/kupdate">
                Update
              </a>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>
            <b>Beauty</b>
          </h2>
          <div className="dropdown">
            <p>
              <a className="lin" href="/bupload">
                Upload
              </a>
            </p>
            <p>
              <a className="lin" href="/bupdate">
                Update
              </a>
            </p>
          </div>
        </div>
        {/* </div>
          <div className="col-lg-9"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
