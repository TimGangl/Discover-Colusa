//import shop images
import richiesFlower from '../../images/richies-flower.jpg';
import rusticRefined from '../../images/rustic-refined.jpg';
import blessingBaby from '../../images/blessing-baby.jpg';
import christiansClothes from '../../images/christians-corner-clothes.png';
import sierraFlowers from '../../images/sierra-flowers.png';
import kittlesOutdoor from '../../images/kittles-outdoor-sport.jpg';
import friendsAround from '../../images/friends-around-the-block.jpg';
import artsPom from '../../images/arts-pom.jpg';

//import dine images
import marketStImage from  '../../images/market-st-sandwich.jpeg';
import colusaTaco from '../../images/colusa-mexican-tacos.jpeg';
import roccosPotato from '../../images/rocco-potato.png';
import dragonFood from '../../images/dragon-food.jpg';
import donEnchiladas from '../../images/don-enchiladas.jpeg';
import chefPrime from '../../images/chef-colus-prime.jpg';
import authenticaBurrito from '../../images/authentica-burrito.jpeg';
import riversideBurger from '../../images/riverside-lanes-burger.jpg';
import cabanaBurrito from '../../images/cabana-burrito.jpeg';
import reinasHandFood from '../../images/reinas-hand-food.jpeg';
import onTheRangeEnchiladas from '../../images/on-the-range-enchiladas.jpeg';
import shopNSaveChicken from '../../images/shop-n-save-chicken.jpg';
import caffinatedCoffee from '../../images/caffinated-coffee.jpg';
import riverbankPizza from '../../images/riverbank-pizza.jpg';
import tienditaTacos from '../../images/tiendita-tacos.jpeg';
import freezetteBurger from '../../images/freezette-burger.jpg';
import birrieriaSoup from '../../images/birrieria-soup.jpeg';

//import play images
import duckHunting from '../../images/Duck Hunting 2.jpg';
import fishingDadSon from '../../images/Fishing Dad Son Poles.jpeg';
import kayakPaddles from '../../images/Kayak orange paddles.jpg';
import statePark from '../../images/State Park Sign 1.jpg';
import sutterButtes from '../../images/Sutter Buttes Red.jpg';

//import stay images
import riversideInnImage from '../../images/colusa-riverside-inn.webp';
import colusaMotelImage from '../../images/colusa-motel.jpg'
import jaysHouseImage from '../../images/jays-house.webp';
import harkeyHouseImage from '../../images/harkey-house.jpg';

// This is an array of objects containing information about the businesses on the Home page.
export const carouselShopData = [
  {
    image: richiesFlower,
    alt: 'riches-florist-img',
    businessName: "Richie's Florist",
    text:
      "Richie's is a full service florist and gift shop with cute boutique products and an eye for home decor. In Colusa since 1945, Richie's Florist is in the same building as the original Colusa City Hall on Market Street. Visit them today for a quick gift, or special Colusa find!",
      address: '427 Market St ',
      phone: '(530) 458-5174',
      hours: 'Monday through Friday 9am-5pm', 
      hours2: 'Saturday 9am-1pm',
      hours3: 'Sunday Closed',
    footer: 'https://www.richiesflorist.net/',
  },
  {
    image: rusticRefined,
    alt: 'rusic-refined-img',
    businessName: 'Rustic & Refined',
    text:
      "Rustic & Refined is one of those gift and home decor stores with exquisite taste that visitors love returning to time and again. With a range of furniture, art, small decor pieces, pillows, wall hangings and more, Rustic & Refined is a can't miss destination in Downtown Colusa.",
      address: '430 Market Street suite G ',
      phone: ' (916) 224-6760',
      hours: '',
    footer: 'https://www.facebook.com/Colusas-Rustic-Refined-106441664434637',
  },
  {
    image: blessingBaby,
    alt: 'blessings-img',
    businessName: 'Blessings: Mother & Baby Boutique',
    text:
      "Blessing Mother & Baby has been in operation since 2017 offering the most darling selection of baby, kid, older kid, and mother centric clothing and wares. They also features a selection of rare art from local artists and craftsman. Frequently cited as one of the cutest stores in Colusa, they can be found on 5th street in Colusa's quaint Historic Downtown.",
      address: '245 5th Street',
      phone: '(530) 476-2320 ',
      hours:'',    
      footer: 'https://www.facebook.com/blessingsmotherandbabyboutique/',
  },
  {
    image: christiansClothes,
    alt: 'christians-corner-img',
    businessName: 'Christians Corner',
    text:
      "Christian's Corner is led by teenage design and lifestyle phenom Christian Duran. The store is a reflection of a modern design aesthetic offering a wonderful selection of women's clothing, home wares, sunglasses, photography, and more.",
      address: '433 Market St.',
      phone: '(530) 383-6149  ',
      hours: 'Monday & Tuesday Closed', 
      hours2: 'Wednesday & Thursday 11am-4pm',
      hours3: 'Friday 11am-7pm',
      hours4: 'Saturday 10am-7pm',
      hours5: 'Sunday 10am-4pm',
    footer: 'https://christianscorner.co',
  },
  {
    image: sierraFlowers,
    alt: 'sierra-flowers-img',
    businessName: 'Sierra Flowers',
    text:
      'Sierra FLowers has been a Colusa mainstay since 2011 providing flowers, event rental equipment, catering, and event servicing to regional eventgoers. Well known for the bright live canary aviary in their shop, Sierra Flowers is a family run operation and the place to source cute gifts from Colusa and more!',
      address: '330 Market Street',
      phone: '(530) 458-8128 ',
      hours: 'Monday through Friday 8am-6pm ',
      hours2: 'Saturday 8am-2:30pm',
      hours3: 'Sunday Closed',
    footer: 'https://www.sierraflowers.net',
  },
  {
    image: kittlesOutdoor,
    alt: 'kittles-img',
    businessName: 'Kittles Outdoor & Sport',
    text:
      "Kittles Outdoor is the legendary hunting and fishing store with a tremendous selection of guns and gear for your next great Colusa adventure. Discover Colusa fully outfitted by Kittles- they have everything! A Downtown Colusa mainstay for over 20 years, just one visit will turn you into a loyal Kittle's customer!",
      address: '888 Market Street',
      phone: '(530) 458-4868',
      hours: 'Monday through Saturday 5am-6pm',
      hours2: 'Sunday 5am-2pm',
    footer: 'https://www.kittlesoutdoor.com/',
  },
  {
    image: friendsAround,
    alt: 'friends-around-block-img',
    businessName: 'Friends Around the Block',
    text:
      "Open since 2013, Friends Around the Block Quilt Shop is a popular destination for Northern California Quilters. Guests come from far and wide to take quilting classes, have their works 'quilted' on the shop's long-arm machine, and peruse the carefully selected inventory. Friends Around the Block Quilt Shop in Colusa is a wonderful place to find gifts and products for a quilter of any level!",
      address: '211 8th Street ',
      phone: '(530) 458-7467  ',
      hours: 'Tuesday through Friday 10am-5pm',
      hours2: 'Saturday 10am-4pm',
      hours3: 'Sunday & Monday Closed',
    footer: 'https://www.friendsaroundtheblock.com/',
  },
  {
    image: artsPom,
    alt: 'colusa-art-council-img',
    businessName: 'Colusa County Arts Council',
    text: "When visiting the Colusa County Arts Council store, guests will find a unique selection of paintings, photographs, sculpture and more from local artisans and craftspeople. Stop by and peek in their windows at their location in historic Downtown Colusa!",
      address: '151 5th Street',
      phone: '(530) 458-2222',
      hours: 'Monday through Friday 11am-1pm Saturday & Sunday Closed',
    footer: 'http://www.colusacountyartscouncil.org/',
  },
];

export const carouselDineData = [
  {
    image: marketStImage,
    alt: 'market-img',
    businessName: 'Market Street Grill',
    text:
      'Market Street Grill is located in Historic Downtown Colusa and features lovely outdoor dining, American food, and the best place in town to grab some soft serve ice cream.',
      address: '415 Market St.',
      phone: '(530)458-6100',
      hours: 'Open 7 Days a Week 7am-2pm',
    footer: 'https://www.marketstgrill.com/',
  },
  {
    image: colusaTaco,
    alt: 'tacos-img',
    businessName: 'Tacos El Amigo',
    text:
    'You can find Tacos El Amigo and their delicious Mexican fare in Historic Downtown Colusa right near Levee Park- look for the flags! ',
      address:'110 8th Street',
      phone: '(530) 844-6090',
      hours: 'Monday through Friday 7am-7pm',
      hours2: 'Closed Saturdays and Sundays',
    footer: 'https://www.facebook.com/tacos.elamigo.5',
  },
  {
    image: roccosPotato,
    alt: 'roccos-img',
    businessName: 'Roccos Bar & Grill',
    text:
      "Rocco's is one of Colusa's most well known restaurants! Located in Historic Downtown, Roccos offers a full bar, a robust American style menu, outdoor seating, and an adjoining banquet room for large groups. Visit them today for great steaks, salads, soups, and other items hot off the grill!",
      address: '546 Market Street',
      phone: '(530) 458-8646',
      hours: 'Monday through Saturday 11am-9pm',
      hours2: 'Closed Sundays',
    footer: 'https://www.roccosbarandgrill.com/',
  },
  {
    image: dragonFood,
    alt: 'dragon-img',
    businessName: 'Dragon Island',
    text:
      "Dragon Island is Colusa's premiere Chinese restaurant featuring a 3 page menu of delicious Asian fare. Located in Colusa's Historic Downtown.",
      address: '535 Market Street',
      phone: '(530) 458-4111',
      hours: 'Monday through Saturday 11am-8:30pm',
      hours2: 'Closed Sundays',
    footer: 'http://dragon-island.edan.io/',
  },
  {
    image: donEnchiladas,
    alt: 'don-habaneros-img',
    businessName: 'Don Habaneros',
    text:
      "Located on Fremont Street, Don Habeneros is a local favorite and boasts a secret habanero sauce you can only get if you know to ask! A broad Mexican fusion menu, Don Habaneros also serves sandwiches and is well known for their 'Mexican Pizza', seafood specials, and lamb entrees in addition to regular Mexican staples such as tacos, burritos, and enchiladas.",
      address:'611 Fremont Street',
      phone: '(530) 458-3533',
      hours: 'Open Monday-Saturday 11am to 8:30pm Closed Sundays',
    footer: 'https://zmenu.com/don-habanero-colusa-online-menu/',
  },
  {
    image: chefPrime,
    alt: 'chef-colus-img',
    businessName: 'Chef Colus',
    text:
      "Chef Colus is a Market Street Colusa restaurant serving a variety of American Fare. They cook food to order, from scratch, using time tested family recipes such as an incredible Prime Rib dinner with all the fixins'!",
      address:'334 Market St. ',
      phone: '(530) 458-4115',
      hours: 'Monday through Saturday 11am-9pm',
      hours2: 'Closed Sundays',
    footer: 'https://www.facebook.com/ChefColus',
  },
  {
    image: authenticaBurrito,
    alt: 'la-authentica-img',
    businessName: 'La Authentica de Colima',
    text:
      'La Authentica de Colima is a favorite local hangout located on Carson Street just off Bridge St. Serving traditional Mexican fare, La Authentica features great outdoor seating and a festive atmosphere.',
      address:'17 Carson St. ',
      phone: '(530) 619-0085',
      hours: 'Open 7 days a week from 8am-10pm',
    footer: 'http://la-autentica-de-colima.edan.io/',
  },
  {
    image: riversideBurger,
    alt: 'riverside-lanes-img',
    businessName: 'Riverside Lanes',
    text:
      'Voted "Best Burger in Town" multiple times, the 10 Pin Grill located inside this bowling alley/restaurant combination offers both food and entertainment. A great place for the whole family to eat and enjoy!',
      address:'420 Main Street',
      phone: '530) 458-8866',
      hours: 'Check Website for Hours',
    footer: 'http://www.colusabowling.com/',
  },
  {
    image: cabanaBurrito,
    alt: 'la-cabana-img',
    businessName: 'La Cabana',
    text:
      'La Cabana can be found inside the Town & Country Shopping Center on Bridge St.',
      address: '1027 Bridge St.',
      phone: '(530) 458-4961',
      hours: 'Monday-Friday 10am-8:45pm',
    footer: 'https://zmenu.com/la-cabana-colusa-2-online-menu/',
  },
  {
    image: reinasHandFood,
    alt: 'las-reinas-img',
    businessName: 'Las Reinas',
    text:
      'Las Reinas deli counter serves up fresh Mexican specialties in a festive atmosphere. No in-store dining, this gem on Fremont Street is a great place to grab and go your favorite tacos!',
      address: '751 Fremont Street',
      phone: '(530) 458-7775',
      hours: 'Open 8am-8pm most days',
    footer: 'https://www.facebook.com/carnicerialasreinas',
  },
  {
    image: onTheRangeEnchiladas,
    alt: 'resturant-on-the-range-img',
    businessName: 'Restaurant on the Range',
    text:
      "Restaurant on the Range is located in Colusa's Historic Downtown and features a robust menu of Mexican/American fare including a burger they call 'The Bronco'. If you're brave enough to ride the bronc, then this friendly place is for you!",
      address: '221 5th Street',
      phone: '(530) 619-0191',
      hours: 'Open 7 days a week from 7am-7pm',
    footer: 'https://www.facebook.com/therangecolusa/',
  },
  {
    image: shopNSaveChicken,
    alt: 'shop-n-save-img',
    businessName: 'Shop N Save',
    text:
      'This surprising location features some of the best Roasted Meats around. Stop in and grab some to go!',
      address: '10 Sioc Street',
      phone: '(530) 458-2800',
      hours: '6am-12am, 7 days a week',
    footer: 'https://www.facebook.com/SHOP-N-SAVE-106529420797814/',
  },
  {
    image: caffinatedCoffee,
    alt: 'caffeinated-img',
    businessName: 'Caffeinated',
    text:
      "Caffeinated is Colusa's wonderful coffee shop serving up freshly roasted coffees, lattes, americanos, and more! They offer a wonderful selection of pastries, sandwiches on freshly baked bread, snacks, and sweets.",
      address: '538 Market St. ',
      phone: '(530) 458-2253',
      hours: 'Monday through Friday 5am-4pm',
      hours2: 'Saturday & Sunday 5am-2pm',
    footer: 'https://www.facebook.com/CaffeinatedColusa/',
  },
  {
    image: riverbankPizza,
    alt: 'riverbank-pizza-img',
    businessName: 'Riverbank Pizza',
    text:
      "Riverbank Pizza features handcrafted Pizza in Colusa's fabulous Fremont St. Delivery of fresh, hot pizza is just a phone call away!",
      address: '620 Fremont St. ',
      phone: '(530) 458-4711',
      hours: 'Monday through Saturday 11am-9pm',
      hours2: 'Sunday 11am-8pm',
    footer: 'https://www.zmenu.com/riverbank-pizza-colusa-online-menu/',
  },
  {
    image: tienditaTacos,
    alt: 'la-tiendita-img',
    businessName: 'La Tiendita',
    text:
      'La Tiendita is located just off of Market Street on First, and is well known for their selection of taco flavors and low prices! ',
      address: '219 First St. ',
      phone: '(530) 619-0246',
      hours: 'Open 7 days a week from 8am-7pm',
    footer: 'https://www.facebook.com/pages/La%20Tiendita%20Colusa,%20Ca/452288361526104',
  },
  {
    image: freezetteBurger,
    alt: 'jeff=freezette-img',
    businessName: "Jeff's Freezette",
    text:
      "Jeff's Freezette is Colusa's famous drive-up diner featuring old-style burger, fries, and shakes the way they used to be! You can't miss it as you drive along Highway 20 which becomes 10th Street coming into Colusa. Jeff's has ample street parking and outdoor dining.",
      address: '854 10th Street',
      phone: '(530) 458-2831',
      hours: 'Open 7 days a week 11am-9pm ',
    footer: 'https://www.facebook.com/pages/Jeffs-Freezette/115898871764286',
  },
  {
    image: birrieriaSoup,
    alt: 'birrieria-michoacan-img',
    businessName: 'Birrieria Michoacan',
    text:
      'A traditional Mexican Restaurant at the edge of town, Birrieria Michoacan has ample parking and easy access.',
      address: '1246 Market Street',
      phone: '(530) 619-0175',
      hours: 'Tuesday through Sunday 7am-4pm',
      hours2: 'Monday Closed',
      footer: 'https://www.facebook.com/pages/Birrieria%20Michoacan/154406138074188/',
  }
];

export const carouselPlayData = [
  {
    image: duckHunting,
    alt: 'duck-hunting-img',
    businessName: '',
    text:
      'This page is still under construction. Come back soon!',
      address: '',
      phone: '',
      hours: '',
    footer: '',
  },
  {
    image: fishingDadSon,
    alt: 'fishing-img',
    businessName: '',
    text: 'This page is still under construction. Come back soon!',
      address: '',
      phone: '',
      hours: '',
    footer: '',
  },
  {
    image: kayakPaddles,
    alt: 'kayak-img',
    businessName: '',
    text:
      'This page is still under construction. Come back soon!',
      phone: '',
      hours: '',
    footer: '',
  },
  {
    image: statePark,
    alt: 'statepark-img',
    businessName: '',
    text:
      'This page is still under construction. Come back soon!',
      address: '',
      phone: '',
      hours: '',
    footer: '',
  },
  {
    image: sutterButtes,
    alt: 'sutter-butte-img',
    businessName: '',
    text:
      'This page is still under construction. Come back soon!',
      address: '',
      phone: '',
      hours: '',
    footer: '',
  },
];
export const carouselStayData = [
  {
    image: riversideInnImage,
    alt: 'riverside-inn-img',
    businessName: 'Colusa Riverside Inn',
    text:
      '',
      address: '41 5th St',
      phone: '(530)458-5880',
      hours: '',
    footer: 'https://bestcolusamotel.com/',
  },
  {
    image: colusaMotelImage,
    alt: 'colusa-motel-img',
    businessName: 'Colusa Motel',
    text:
      '',
      address: '60 Market St, Colusa  ',
      phone: '(530) 458-4906 ',
      hours: '',
    footer: 'https://www.colusamotel.com/',
  },
  {
    image: jaysHouseImage,
    alt: 'jay-vacation-rental-img',
    businessName: 'Jay House Vacation Rental',
    text:
      '',
      address: '249 Jay St ',
      phone: '(707) 480-3457',
      hours: '',
    footer: 'http://www.jayhousecolusa.com/',
  },
  {
    image: harkeyHouseImage,
    alt: 'harkey-house-img',
    businessName: ' Harkey House',
    text:
      '',
      address: '212 C St ',
      phone: ' (530) 674-1942',
      hours: '',
    footer: 'http://www.harkeyhouse.com/',
  },
  
];

export default {
  carouselShopData,
  carouselDineData,
  carouselPlayData,
  carouselStayData,
};
