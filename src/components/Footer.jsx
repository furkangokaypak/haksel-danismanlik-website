import React from "react";

function Footer() {
  return (
    <div className="flex justify-center w-full bg-[#003776]">
      <footer className="text-white rounded-lg shadow mt-4 w-full max-w-screen-xl">
        <div className="p-4 md:py-8 flex flex-col items-center justify-center text-center">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Haksel Danışmanlık
            </span>
          </a>
          <ul className="flex flex-wrap justify-center text-sm font-medium">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                TSE Onaylı Danışmanlık
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                İletişim
              </a>
            </li>
          </ul>
          <hr className="my-6 w-full border-white sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white text-center">
            © 2024{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline text-white"
            >
              Haksel Danışmanlık™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
