import Image from "next/image";

function Navbar() {
  return (
    <header className="py-4 shadow-md px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <Image src="/assets/logo.svg" alt="IPO" width={32} height={32} />
            </a>
          </div>
          <nav className="md:flex gap-4 hidden ">
            <a href="#">Home</a>
            <a href="#">Stocks</a>
            <a href="#">Ipo</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
