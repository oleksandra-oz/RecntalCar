import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../redux/carsSlice';

const Home = () => {

  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.list);

  return (
    <div>
       <h1>Home Page</h1>
       <button onClick={()=> dispatch(setCars([{id:1, brand: 'Dacia'}]))}>
        Add car
       </button>
       <pre>{JSON.stringify(cars, null, 2)}</pre>
    </div>
  )
}

export default Home
