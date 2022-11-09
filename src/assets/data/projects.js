import { v4 as uuidv4 } from 'uuid';
import mask3 from '../images/mask3.png';
import kryptoverse from '../images/kryptoverse.png';
import krypto from '../images/krypto.png';
import typo from '../images/typo.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Mask3',
    desc: 'Developing an API endpoint to LOGIN using your Blockchain Account across multiple apps',
    img: mask3,
    link: 'https://mask-3.netlify.app/',
    github: 'https://github.com/Arnish-B/metamask-blockchhain-auth',
  },
  {
    id: uuidv4(),
    name: 'Typography',
    desc: 'A minimalistic typing test website',
    img: typo,
    link: 'https://typingtest-typo.netlify.app',
    github: 'https://github.com/Arnish-B/typingtest-typo',
  },
  {
    id: uuidv4(),
    name: 'KryptoVerse',
    desc: 'A Voice based Cryptocurrency app that provides users with the latest news and information about the crypto currency market.',
    img: kryptoverse,
    link: 'https://kryptoverse.netlify.app/',
    github: 'https://github.com/Arnish-B/KryptoVerse',
  },
  {
    id: uuidv4(),
    name: 'Krypto',
    desc: 'Send Cryptocurrency to anyone across the world',
    img: krypto,
    link: 'https://krypto-dominus.netlify.app/',
    github: '',
  },
];

export default projects;
