import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview(selectedRestaurant) {
  const [open, setOpen] = useState(false);
  return (

    <>
      <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>Click here to see Review</button>
      <Collapse in={open}>
        <div className='my-2'>
          <hr />
          {
            selectedRestaurant[0]?.reviews.length > 0 ?
              selectedRestaurant[0]?.reviews.map(items => (
                <div>
                  <h6>Name:{items.name}</h6>
                  <h6>date:{items.date}</h6>
                  <h6>Rating:{items.rating}</h6>
                  <h6>Description: {items.comments}</h6>
                </div>
              )) :
              <p>no Reviews found</p>
          }

        </div>
      </Collapse>
    </>
  )
}

export default RestReview