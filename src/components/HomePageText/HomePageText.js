import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import '../../components/HomePageText/HomePageText.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePageText = () => {

  return (
    <>
      <div className="row">
        <div className="col-md-1 col-xsm-0"></div>
        <div className="col-md-6 col-xsm-12">

          <p className='info text-center mt-5 mb-5'>
            <strong>
              <i>Discover Colusa: </i>
            </strong>
        The small town by the big Sacramento River. Colusa is the premiere
        Northern California location for outdoor recreation, hunting, fishing,
        good food, and a historic downtown with fun places to shop. With a
        growing arts and music scene, beloved
        'street dances', and unique river access, Colusa is home to a collection of extraordinary
        events and activities.
      </p>
          <p className='info text-center mt-2 mb-5'>
            Fourth of July fireworks exploding over the river, duck hunting season
            opened with Colusa Duck Days festival, Christmastime in Colusa marking
        the Holidays... Colusa is a destination worthy of discovery.
      </p>
          <p className='info text-center mt-2 mb-5'>
            Visitors have river access through the Colusa Boat Launch and other
            points along Main Street. A short hop off of I-5, Colusa is the nexus of
            Hwy 20 and 45. Guests will easily find hotel accommodations, B&B, and
        AirBnB options to extend their stay, and fully discover Colusa.
      </p>
        </div>
        <div className="col-md-4 col-xsm-12 mt-5">
          <Newsletter />
          <div>
            <h2 className="social-header text-center mt-3">Follow us on Socials</h2>
            <div className="text-center">
           <a href="https://www.facebook.com/DiscoverColusaCA" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons m-3" icon={["fab", "facebook"]} size="6x"/></a>

            <a href="https://www.instagram.com/discovercolusa/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons m-3" icon={["fab", 'instagram']} size="6x"/></a>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-xsm-0"></div>
      </div>

    </>
  );
};

export default HomePageText;
