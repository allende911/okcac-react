import { FaFacebook, FaMailBulk } from 'react-icons/fa';
import { MdForum } from 'react-icons/md';

export const cards = [
  {
    key: 1,
    icon: MdForum,
    heading: 'Join our Discussion Board & introduce yourself',
    text: "Now that you've joined, be sure to join our discussion board if you haven't already. Once we verify your membership, we'll add you to the Members-only areas.",
    link: 'http://okcastroclub.com/phpBB2/index.php',
  },
  {
    key: 2,
    icon: FaFacebook,
    heading: 'Browse our members-only Facebook group',
    text: 'If you use Facebook, we maintain a private Facebook group. Be sure to join that, as many, many people use that as a great way to communicate.',
    link: '#',
  },
  {
    key: 3,
    icon: FaMailBulk,
    heading: 'Send us a membership question or feedback',
    text: "Have a question or comment? Send us an email and introduce yourself. We'd love to hear how you found out about us and address any concerns you might have.",
    link: 'mailto:membership@okcastroclub.com',
  },
];
