import localFont from 'next/font/local';

const inter = localFont({ src: '../../../public/fonts/InterVariable.ttf' })
const montserrat = localFont({ src: "../../../public/fonts/MontserratVariable.ttf" });

export { inter as defaultFont, montserrat as titleFont };