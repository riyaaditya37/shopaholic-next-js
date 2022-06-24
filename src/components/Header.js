import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {

  const { data: session, status } = useSession()
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-black p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image
            src="https://bit.ly/3tXJQvV"
            width={150}
            height={70}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-pink-300 hover:bg-pink-600">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div  className="text-white flex items-center text-xs space-x-6 px-4">
        <div className="link" onClick={!session ? signIn : signOut}>
          <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
          <p className="font-extrabold md:text-sm">Your Profile</p>
          </div>
          <div onClick={() => router.push("/checkout")} className="cursor-pointer link">
           
            <p className="font-extrabold md:text-sm"> Your Orders</p>
          </div>
          <div
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-red-500 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Saved </p>
        <p className="link">Home and Garden</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Collectibles and Art</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Beauty</p>
        <p className="link hidden lg:inline-flex">Personal Care</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Industrial equipment</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
};

export default Header;