import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant())
  }, [])
  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
  console.log("1");
  console.log(allRestaurant);
  return (
    <>
      <Row>
        {
          allRestaurant?.length > 0 ?
            allRestaurant.map((restaurant) => (
              <Col className='px-5 py-3' sm={6} md={4} lg={4}>
                <RestCard restaurant={restaurant} />
              </Col>
            )):
        <p>no restaurant found</p>
    }

      </Row>
    </>
  )
}

export default Home