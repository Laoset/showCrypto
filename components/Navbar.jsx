import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex items-center justify-between sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logito.png"
            alt="carShow"
            width={70}
            height={10}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
