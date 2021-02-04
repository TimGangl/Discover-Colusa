//import images for blogs
import duck from '../images/BlogImages/duck.jpg';
import burrito from '../images/cabana-burrito.jpeg';

export const singleBlogData = [
  {
    images: [
      {
        src: duck,
        alt: 'a duck',
      },
      {
        src: burrito,
        alt: 'a burrito',
      },
    ],
    blogTitle: 'Welcome To Discover Colusa',
    blogAuthor: 'Tim Gangl',
    blogDate: 'January 30, 2021',
    blogPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',
    blogContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus. Morbi tristique feugiat nibh, malesuada porta quam facilisis in. Proin iaculis iaculis eros, quis imperdiet ex vehicula vel. Duis rutrum neque malesuada faucibus dignissim.',
  },
  {
    images: [
      {
        src: duck,
        alt: 'a duck',
      },
    ],
    alt: 'a duck with crazy hair',
    blogTitle: 'Another Blog about Colusa',
    blogAuthor: 'Jed Smit',
    blogDate: 'January 30, 2021',
    blogPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus.',
    blogContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat libero et sodales eleifend. Donec enim libero, lacinia facilisis vestibulum vel, blandit eu risus. Morbi tristique feugiat nibh, malesuada porta quam facilisis in. Proin iaculis iaculis eros, quis imperdiet ex vehicula vel. Duis rutrum neque malesuada faucibus dignissim.',
  },
];

export default singleBlogData;
