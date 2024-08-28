import React from 'react'
import DiscoImage from '../assets/michael-jackson-music.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-6 p-5">
            <h1 className='text-center'>Welcome To Media Player</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat velit perspiciatis mollitia quisquam possimus! Atque excepturi dicta libero sunt debitis expedita tempora ad id magnam, quod rerum enim ipsum quasi.
            Distinctio excepturi, quas nobis, praesentium itaque ex, vitae optio rem deleniti iusto aperiam! Reprehenderit, ullam iste, cupiditate unde tempora consectetur accusamus, minus quia fugiat neque eaque laboriosam doloremque saepe? Soluta!</p>
            <div className='text-center'>
              <Link to={'./home'}>
              <button className='btn btn-danger'>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <img src={DiscoImage} alt="" width={'350px'} height={'350px'} />
            <img src={DiscoImage} alt="" width={'350px'} height={'350px'} />

          </div>
        </div>
      </section>
      <section>
        <h1 className='text-center mt-5'>Features</h1>
        <div className="row">
          <div className="col-4"><Card style={{ width: '350px',marginLeft:'40px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEIpao5S8AAqY8m4qysjiuxv_I_ggGZSX3g&s" width={'20px'} height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-4"><Card style={{ width: '350px',marginLeft:'50px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/striking-analog-camera-icon-dynamic-imagery_934697-14786.jpg?w=740" width={'200px'} height={'250px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-4"><Card style={{ width: '350px',marginLeft:'80px' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/elevate-your-audio-experience-with-ultimate-cyberpunk-portable-music-player_934697-19028.jpg?w=740" width={'200px'} height={'250px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></div>
        </div>
      </section>
      <section>
        <div className="row border border-3 rounded m-5 p-5">
          <div className="col-4">
            <h3 className='m-3'>Simple fast and powerful</h3>
            <p><strong>Play Everything</strong>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus voluptatem illo suscipit natus amet perspiciatis nam nostrum odio qui expedita incidunt a, harum veritatis voluptatibus. Tempore quia obcaecati dolorem!</p>
            <p><strong>Play Everything</strong>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus voluptatem illo suscipit natus amet perspiciatis nam nostrum odio qui expedita incidunt a, harum veritatis voluptatibus. Tempore quia obcaecati dolorem!</p>
            <p><strong>Play Everything</strong>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus voluptatem illo suscipit natus amet perspiciatis nam nostrum odio qui expedita incidunt a, harum veritatis voluptatibus. Tempore quia obcaecati dolorem!</p>
            </div>
          <div className="col-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/wwvYyW2FIV8?si=-INxgB3eAXvDQoIQ&amp;start=45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>
      </section>
    </div>
  )
}

export default Landingpage