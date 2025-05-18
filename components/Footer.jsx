import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 text-center textColor text-sm flex justify-center flex-col items-center">
      <p>Data provided by CoinGecko API</p>
      <div className="flex flex-row gap-2 mt-5 h-auto items-center w-auto">
        <p>{'<'}</p>
        <p>Made with</p>
        <Heart color="#B83A2D" />
        <a
          className="hidden lg:block"
          href="https://github.com/Laoset"
          target="_blank"
        >
          <p>by Alan Kevin Corman Samanamud</p>
        </a>
        <a
          className="lg:hidden"
          href="https://github.com/Laoset"
          target="_blank"
        >
          <p>by Alan Kevin Corman Samanamud</p>
        </a>
        <p>{'/>'}</p>
      </div>
    </footer>
  );
};

export default Footer;
