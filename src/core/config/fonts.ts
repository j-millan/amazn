import { Inter, Montserrat_Alternates } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export { inter as defaultFont, montserrat as titleFont };