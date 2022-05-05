import { FaFacebook, FaMailBulk } from 'react-icons/fa';
import { MdForum } from 'react-icons/md';

export const cards = [
  {
    key: 1,
    icon: MdForum,
    heading: 'Join our Discussion Board & introduce yourself',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'http://okcastroclub.com/phpBB2/index.php',
  },
  {
    key: 2,
    icon: FaFacebook,
    heading: 'Browse our members-only Facebook group',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
  },
  {
    key: 3,
    icon: FaMailBulk,
    heading: 'Send us a membership question or feedback',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'mailto:membership@okcastroclub.com',
  },
];
