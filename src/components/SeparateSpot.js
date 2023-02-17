import { useState, useContext } from 'react';
import SpotsContext from '../store/SpotsContext';
import Carousel from "./Carousel";
import { useParams, Link } from 'react-router-dom';

const SeparateSpot = () => {
  let context = useContext(SpotsContext);
  let { id } = useParams();
  const [spot, setSpot] = useState(context.spots.find(elem => elem.id == id));

  const revblock = arr => {
    return arr.map(rev => {
      return (
        <li>
          <q className='me-2'>{rev.review}</q>
          <cite>{rev.author}</cite>
        </li>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <Carousel images={spot.images} carId={'car' + id} />
      </div>
      <div className="col-lg-6">
        <h3>{spot.title}</h3>
        <p>{spot.price}</p>
        <div>
          <p>{spot.description}</p>
        </div>
        <div>
          <h5>Reviews:</h5>
          <ul>
            {spot.reviews.length ? revblock(spot.reviews) : "It hasn't been reviewed yet"}
          </ul>
        </div>
        <Link to={`/spot-edit/${id}`} className='btn d-flex btn-success mb-0 card-spot-button text-center'>Edit the spot</Link>
      </div>
    </div>
  );
}

export default SeparateSpot;