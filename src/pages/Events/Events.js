import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/duck-week.png';
import '../Events/Events.css';


function Events(){
  return(
    <>
    <div>
      <img className="img-fluid" src={photo} alt="colusa field"></img>
    </div>
    <Navigation />
    <div className="row">
    <div className="col-3"></div>
    <div className="duck-container col-3">
      <div className="duck-image text-center"><img className="img-fluid" src={photo2} alt="duck event"></img>
      </div>
      </div>
      <div className="col-3 main duck-container"><span className="  duck-text">Colusa is world-famous for its superb migratory waterfowl hunting grounds and thousands of hunters flock to this small town every year from October-January hoping to stock their freezers with delicious duck. This year, Colusa restaurants are paying tribute to the last week of Duck Season by adding delicious duck dishes to their menus- for the week of January24th-31st open. Participating restaurants include: </span></div>
      <div className="col-3"></div>
      </div>

      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-3">
<h2 className="rest-name text-center">Restaurant on the Range</h2>
<p className="duck-text">221 5th Street</p>
<a className="duck-text" href="tel:"><p className="duck-text">(530) 619-0191</p></a>
<p className="duck-text">Duck Tamales, Birria, and Tacos with special seasoning and toppings</p>
        </div>
        <div className="col-3">
<h2 className="rest-name text-center">Market Street Grill</h2>
<p className="duck-text">415 Market Street</p>
<a className="duck-text" href="tel:"><p className="duck-text">(530) 458-6100</p></a>
<p className="duck-text">Smoked Duck Breast over Marquis Potatoes and Raspberry gravy 
Duck with Crispy Skin Salad, figs, goat cheese, citrus vinagrette
</p>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-3">
<h2 className="rest-name text-center">Don Habaneros</h2>
<p className="duck-text">611 Fremont Street</p>
<a className="duck-text" href="tel:"><p className="duck-text">(530) 458-3533</p></a>
<p className="duck-text">Slow braised Duck leg and thigh with semi-sweet chocolate based specialty sauce</p>
        </div>
        <div className="col-3">
<h2 className="rest-name text-center">Rocco's Bar & Grill </h2>
<p className="duck-text">546 Market Street</p>
<a className="duck-text" href="tel:"><p className="duck-text">(530) 458-8646</p></a>
<p className="duck-text">Entree Duck Done Two Ways: Grilled & Duck Leg/Thigh Confit over Wild Mushroom Risotto with Brussel Sprouts and Pancetta. Friday only- Duck Pizza
</p>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-3">
<h2 className="rest-name text-center">Las Reinas</h2>
<p className="duck-text">751 Fremont Street</p>
<a className="duck-text" href="tel:"><p className="duck-text">(530) 458-7775</p></a>
<p className="duck-text">Duck with grandmother's secret Mole sauce recipe over rice and beans</p>
        </div>
        <div className="col-3">

        </div>
        <div className="col-3"></div>
      </div>
    
    <Footer />
    </>
  )
}

export default Events;
