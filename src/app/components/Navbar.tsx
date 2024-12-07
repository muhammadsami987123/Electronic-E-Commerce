import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import Searchbar from "../searchbar";

export default function Navbar() {
  return (
    <><div  className='bg-black text-white text-center w-1440px  h-48px'>
      <header className='font-poppins w-400 size-14px leading-{21px}'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</header></div>
    <nav className="bg-white p-5 flex">
      <div className="flex gap-64 items-center container mx-auto ">
        <h1 className="text-xl font-bold text-black  ">Exclusive</h1>
        <ul className="flex space-x-7 ">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <Searchbar />
        <CiHeart className="text-2xl" />
        <HiOutlineShoppingCart className="text-2xl " />
        </ul>
      </div>
    </nav>
    </>
  );
}
