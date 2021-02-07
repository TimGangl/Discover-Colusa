//import images for blogs
import duck from '../images/BlogImages/duck.jpg';
import burrito from '../images/cabana-burrito.jpeg';

export const singleBlogData = [
  //first blog article
  {
    blogTitle: 'Welcome To Discover Colusa',
    blogDate: 'January 30, 2021',
    blogPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',
    blogContentSections: [
      {
        text:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.llllldlkdsoijfosiudrodkhkduhgdrhgdrnkdrutdkurthkrudhtkdurtdkurtdkurhtgvdk ruhgkdruhrdukhfskhfskjhfskjhfkjhfdkj shfkjsdhkjsdhfkjsdhfk jshdfkjhdfkjhsdfkjhsdfkjhsdfkjhsdfkjhsefkjhsk jhfskjhfkj sdfkjhsfkhsekfjhskjfhsdkjhfkjsfjsfjxfvhdkr kjdfkhrfdurfhdrf khdkrfhu',

        src: burrito,
        alt: 'a burrito',
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',

        src: duck,
        alt: 'a duck',
      },
    ],
  },
  //second blog article
  {
    blogContentSections: [
      {
        text: 'text for first section',

        src: duck,
        alt: 'alt for second section image',
      },
      {
        text: 'text for second section',
      },
    ],
    blogTitle: 'Welcome To Discover Colusa',
    blogDate: 'January 30, 2021',
    blogPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',
  },
];

export default singleBlogData;
