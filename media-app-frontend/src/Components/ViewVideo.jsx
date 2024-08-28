import React from 'react'
import VideoCard from './VideoCard';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
function ViewVideo() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <VideoCard/>
        </div>
        <div className="col-4">
          <VideoCard/>
        </div>
        <div className="col-4">
          <VideoCard/>
        </div>
      </div>
    </div>
  )
}

export default ViewVideo