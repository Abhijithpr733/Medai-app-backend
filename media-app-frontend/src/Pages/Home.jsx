import React from 'react'
import { TbHistoryToggle } from "react-icons/tb";
import AddVideo from '../Components/AddVideo';
import AddCategory from '../Components/AddCategory';
import { Link } from 'react-router-dom'
import ViewVideo from '../Components/ViewVideo';
function Home() {
  return (
    <div>
      <div className="row d-flex justify-content-between">
        <div className="col-4 d-flex">
          <h3>Upload New Video</h3><AddVideo/>
        </div>
        <div className="col-4">
         <Link to={'/watch-history'} style={{textDecoration:'none'}}>
         <h3>Watch History<TbHistoryToggle/></h3>
         </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h3>All Videos</h3>
          <ViewVideo/>
        </div>
        <div className="col-3">
          <h3>Category</h3>
          <AddCategory/>
        </div>
      </div>
    </div>
  )
}

export default Home