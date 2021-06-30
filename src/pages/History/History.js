import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../History/History.css';
import photo from '../../images//colusa.jpg';
import photo2 from '../../images//patwin-hut.jpg';
import photo3 from '../../images//sac-river-colusa.jpg';


function History() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="images of historic photos"></img>
      </div>
      <Navigation />
      
        <h1 className="history-header text-center m-3 mt-5">History of Colusa</h1>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">

          
            
          <p className=" text-img history-text">The River Patwin people lived here before the settlers came. The surrounding wealth of resources provided them with all they needed to live. Their primary food source was the acorn. After harvest and drying, the acorn was cracked and the nut was pounded with a mortar and pestle. The resulting flour was then leached with water and used to make acorn mush and bread.</p>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
          <img className="pawtin-pic img-fluid" src={photo2} alt="pic of Pawtin hut"></img>
          </div>
          <div className="col-sm-3"></div>
        </div>
      
          <p className="history-text">The River Patwin hunted tule elk, deer, antelope, bears and waterfowl with hunting implements tipped by sharp-edged obsidian. They caught salmon, trout and steelhead using weirs (nets) made from wild grapevines and milkweed fibers. They traveled the river in boats made from bundles of tule balsa bound with grapevine. These watercraft, up to 20 feet long and 6 feet wide, were propelled with long poles.</p>

          <p className="history-text">With the 1848 discovery of gold in California, Colusa saw a flood of settlers. Original settlers had arrived with General John Bidwell’s wagon train in 1841, but by 1849 gold seekers took over California.</p>

          <p className="history-text">Colusa eventually became an agricultural center, and scows (large, flatbottomed boats) transported loads of produce and grain downstream to market. After the railroads came, the river declined in commercial importance, but grew in recreational opportunity.</p>

          <p className="history-text">The river pours over its banks carrying away anything in its course, leaving a thick layer of fine silt behind when it subsides. This silt is responsible for some of the finest farmland in the world. The area’s wildlife, which includes deer, raccoons, opossums, foxes, skunks and muskrats, are sheltered by riverbank cottonwood and willow trees. Wild grape and fig are among many other shrubs, trees and plants along the river. Birds you might see include ring-necked pheasants, California quail, mallard ducks, Canada geese, western meadowlarks, northern flickers and ospreys.</p>

          <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
          <img className="sac-river-colusa img-fluid" src={photo3} alt="pic of sac river colusa"></img>
          </div>
          <div className="col-sm-3"></div>
        </div>

          <p className="history-text">Today, the City of Colusa is a true gem along the Sacramento River. With a lovely Historic Downtown featuring unique restaurants and shops, fun annual events, easy outdoor recreational opportunities, and great places to stay, Colusa is destination worthy of discovery!</p>
        </div>
        <div className="col-sm-2"></div>
      </div>

      <Footer />

    </>
  )
}

export default History;