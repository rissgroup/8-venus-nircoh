import React from "react";

export default function Footer() {
  return (
    <footer className=" fixed w-full bottom-0">
      <div className="bg-[#121016] ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="text-white text-sm text-center sm:text-left font-medium">
            <a className="mr-3" href="#">
              Term and Conditions
            </a>
            <a className="mr-3" href="#">
              Personal Data Privacy policy
            </a>
            <a href="#">Risk disclosure policy</a>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p className="text-white">© Mint Nft Page, 2022.</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
