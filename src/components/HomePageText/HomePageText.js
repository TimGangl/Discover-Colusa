import React from 'react';
import Newsletter from '../Newsletter/Newsletter';

const HomePageText = () => {

  return (
    <>
      <div className="row">
        <div className="col-md-2 col-xsm-0"></div>
        <div className="col-md-5 col-xsm-12">

          <h5 className='info text-center mt-5 mb-5'>
            <strong>
              <i>Discover Colusa: </i>
            </strong>
        The small town by the big Sacramento River. Colusa is the premiere
        Northern California location for outdoor recreation, hunting, fishing,
        good food, and a historic downtown with fun places to shop. With a
        growing arts and music scene, beloved
        'street dances', and unique river access, Colusa is home to a collection of extraordinary
        events and activities.
      </h5>
          <h5 className='info text-center mt-5 mb-5'>
            Fourth of July fireworks exploding over the river, duck hunting season
            opened with Colusa Duck Days festival, Christmastime in Colusa marking
        the Holidays...<br></br> Colusa is a destination worthy of discovery.
      </h5>
          <h5 className='info text-center mt-5 mb-5'>
            Visitors have river access through the Colusa Boat Launch and other
            points along Main Street. A short hop off of I-5, Colusa is the nexus of
            Hwy 20 and 45. Guests will easily find hotel accommodations, B&B, and
        AirBnB options to extend their stay,<br></br> and fully discover Colusa.
      </h5>
        </div>
        <div className="col-md-3 col-xsm-12 mt-5">
          <Newsletter />
        </div>
        <div className="col-md-2 col-xsm-0"></div>
      </div>

    </>
  );
};

export default HomePageText;
