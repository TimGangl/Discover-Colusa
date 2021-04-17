//import images for blogs
import ChinaTown from '../images/BlogImages/ChinaTown.jpg';
import ColusaAerial from '../images/BlogImages/ColusaAerial.png';
import LeveeParkRiver from '../images/BlogImages/LeveeParkRiver.jpg';
import KellersThumb from '../images/BlogImages/kellehers-thumb.png';
import GrandHouse from '../images/BlogImages/Grand-House.jpg';
import Beaches from '../images/BlogImages/colusa-beaches.png';

export const singleBlogData = [
//Fourth blog article
{
  blogTitle: 'Beaches in Colusa',
  blogDate: 'April 2021',
  blogPreview: "The Sacramento River isn't known for its beaches, but it certainly should be!",
  blogContentSections: [
    {
      text:
      "The Sacramento River isn’t well known for its beaches, but it certainly should be! The Colusa Sacramento River State Park is covered in the type of greenery otherwise found in a Peter Jackson movie… verdant and slightly jungle-y. But unknown to most who visit, the shade covered park hides the entrance to a short hike that opens onto a sand and gravel beach otherwise known only by locals. The destination doesn’t really have a name, and didn’t ever really need one. Hikers enjoy packing in a lunch, some cold beverages, and bringing a dog or two along. We recommend wearing close-toed shoes for the hike, but once you get to the river’s edge, strip down and jump in! The water is shallow as you tip toe into the river. And swimming is permitted and encouraged with the reminder: it is a river and has currents- so be aware. If you’re worried; take a life jacket before you take a dip.",

      src:Beaches,
      alt:"Colusa Beaches",
    }
  ] 
},
  //Third blog article
  {
    blogTitle: 'Top 5 Instagram-Worthy Photos in Colusa',
    blogDate: 'February 2021',
    blogPreview:
      'For those Northern Californians looking for a day trip near-cation, Colusa is photo competitive sure to surprise and delight leaving visitors with both images and memories.',
    blogContentSections: [
      {
        text:
          "For those Northern Californians looking for a day trip near-cation, Colusa is photo competitive sure to surprise and delight leaving visitors with both images and memories. Here’s the Top 5 locations to capture inevitable Instagram envy from friends and family alike.",

        src: ChinaTown,
        alt: 'Colusa China Town District',
      },
      {
        text:
          "1) Grand Houses of 10th Street: These grand dames of a Victorian past exude a history of posh gossip and whisper of wealth from a bygone era. Boasting many bedrooms, sky-soaring roofs, rounded turrets, Victorian gingerbread, wrap-around porches-these grand houses are nothing short of special.",
      },
      {
        text:
          "2) Levee Park: This long, thin park borders the roaring Sacramento River, a boating and fishing mecca. Viewers can visit the park any day of the week walking the curved pathway that follows the path of the river stretching from the City’s 10th street down to it’s Bridge Street. Families with picnics, birthday bar-b-ques and more are all welcome at Levee Park.",

        src: LeveeParkRiver,
        alt: 'Image of the Levee Park River',
      },
      {
        text:
          "3) Historic Chinese District on Main Street: Mirroring the Levee Park along the river is Main Street.Think a more historic version of Old Town Sacramento. Brick buildings from a bygone era with rumors of an underground network of tunnels connecting one shop to another. One of the most photogenic spots on a sunny day.",
      },
      {
        text:
          "4) Colusa Water Towers: These water towers can be seen from almost anyplace in the city and are a reminder of the City’s close connection to the River. Once labeled Hot and Cold, the towers stand 200 feet in the air and require regular annual cleaning by those not afraid of heights. You can take a selfie on Main St. with the Towers in the background.",

        src: ColusaAerial,
        alt: 'Aerial Veiw of Colusa',

      },
      {
        text:
          "5) Colusa National Wildlife Refuge: Located just up the road from Colusa, the Wildlife Refuge is the place for orinthologists and bird enthusiasts of all types.Stop in Colusa and grab a snack before heading to the refuge for a day - time get away. 2180 State Hwy 20, Colusa.",
      },
    ],
  },
  //second blog article
  {
    blogTitle: 'How to Start a Business in Colusa in 3 Easy Steps',
    blogDate: 'January 2021',
    blogPreview:
      'Starting a business in Colusa is as easy as one, two, three. Just follow these three easy steps!',
    blogContentSections: [
      {
        text: 'Starting a business in Colusa is as easy as one, two, three. Just follow these three easy steps, and you will be on your way to starting your very own business in the City of Colusa!',

        src: KellersThumb,
        alt: 'Street in Colusa',
      },
      {
        text: '1) Find a location that fits your business: If you have a manufacturing business, then the Colusa Industrial Park or the Colusa BioInnovation Center might be a good fit. If you have a retail or restaurant business catering to tourists or residents, then the Historic Riverfront District or vibrant Fremont Street business districts might be a good place for you. You can explore open commercial sites on this interactive map at the City website: www.cityofcolusa.com/home/business',

      },
      {
        text: '2) Work with the City: The City of Colusa offers substantial services for new businesses including help with site selection and negotiating with landlords. The City has access to unique funding designed to help new businesses, and can help get employees plugged in. The City also works with new start-ups of business plan development and even marketing and promotion. (530) 393-6843 or email: cbic(@)cityofcolusa.com',

      },
      {
        text: '3) Get your Business Permit: The City of Colusa business permit fees are low and based on how much you expect to make that year.You can access it online at: www.cityofcolusa.com/home/business/permits-licenses/ Or, you can visit the City offices at 425 Webster Street and grab an application from the friendly admin people at the front desk!',
      }
    ],

  },
  //First blog article
  {
    blogTitle: 'Grand House of Colusa: The Thomas Rutledge House at 409 Tenth Street',
    blogDate: 'January 2021',
    blogPreview:
      'This two-story abode was first constructed in 1905 by Thomas Rutledge and designed in the turn-of-the century transitional style, incorporating both Queen Anne and Colonial Revival.',
    blogContentSections: [
      {
        text: 'This two-story abode was first constructed in 1905 by Thomas Rutledge and designed in the turn-of-the century transitional style, incorporating both Queen Anne and Colonial Revival. Thomas Rutledge was an attorney practicing law in Colusa County. He lived there with his wife Grace Cockscroft until his death in 1942.',

        src: GrandHouse,
        alt: 'The Grand House',
      },
      {
        text: 'The residence is in a rectangular plan with a round corner tower and a conical roof reflecting the Queen Anne influence. The shingle roof has flatted eaves and steep gables with returns. Colonial Revival is seen in the Doric Columns that support the porch sheltering the Main Entrance. Narrow drop siding sheathes the upper and lower stories and a one-story hip-roofed wing is located to the rear. In 1930, this Grand House of Colusa saw an interior renovation and the addition of a half-bath with access from the sun porch.',
      },
    ],

  },
];

export default singleBlogData;
