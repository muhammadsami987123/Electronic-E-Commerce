"use client";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Searchbar from "../searchbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2">
        <p className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-black">Exclusive</h1>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-black font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>

          {/* Search and Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Searchbar />
            <CiHeart
              className="text-2xl cursor-pointer"
              aria-label="Wishlist"
            />
            <HiOutlineShoppingCart
              className="text-2xl cursor-pointer"
              aria-label="Shopping Cart"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-black"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <div className="flex items-center space-x-4 mt-4">
                <CiHeart
                  className="text-2xl cursor-pointer"
                  aria-label="Wishlist"
                />
                <HiOutlineShoppingCart
                  className="text-2xl cursor-pointer"
                  aria-label="Shopping Cart"
                />
              </div>
              <Searchbar />
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
