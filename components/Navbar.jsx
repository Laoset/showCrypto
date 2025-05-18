import { Coins } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="mb-8 md:mb-12">
      <div className="flex justify-center items-center space-x-2 mb-3 ">
        <Coins size={32} className="titleColor" />
        <h1 className="text-3xl md:text-4xl font-bold titleColor">
          CryptoCards
        </h1>
      </div>
      <p className="textColor text-center max-w-2xl mx-auto font-medium">
        Explore the latest cryptocurrency data with our interactive card
        interface. Swipe through to discover price changes, market caps, and
        more.
      </p>
    </header>
  );
};

export default Navbar;
