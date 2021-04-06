import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../Press/Press.css';
import photo from '../../images/press.jpg';
import { Jumbotron } from 'react-bootstrap';

function Press() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="pile of newspaper press letters"></img>
      </div>
      <Navigation />
      <Jumbotron className="bg-transparent">
        <h1 className="press-header text-center m-3">Press Releases</h1>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://williamspioneer.com/2021/news/103951/" target="blank" rel="noreferrer"><strong>Williams Pioneer Review - April 1, 2021 -</strong> Colusa Hosts March of the Minis event on Sacramento River</a></h4>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://williamspioneer.com/2021/news/103829/" target="blank" rel="noreferrer"><strong>Williams Pioneer Review - March 25, 2021 -</strong> Colusa Airport Lands Annual Spring Fly-In</a></h4>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://www.appeal-democrat.com/colusa_sun_herald/colusa-restaurants-mark-the-end-of-duck-season-with-special-menu-items/article_12eb648e-5f59-11eb-b68b-abe792fbc85d.html" target="_blank" rel="noreferrer"><strong>Colusa Sun Herald - Jan 27, 2021 -</strong> Colusa restaurants mark the end of duck season with special menu items</a></h4>

      </Jumbotron>

      <Footer />

    </>
  )
}





export default Press;