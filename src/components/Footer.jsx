import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-white ">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          <div>
            <h1 className="text-lg font-bold">Company</h1>
            <ul className="mt-1">
              <li>submenu 1</li>
              <li>submenu 2</li>
              <li>submenu 3</li>
              <li>submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Support</h1>
            <ul className="mt-1">
              <li>submenu 1</li>
              <li>submenu 2</li>
              <li>submenu 3</li>
              <li>submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Developer API</h1>
            <ul className="mt-1">
              <li>submenu 1</li>
              <li>submenu 2</li>
              <li>submenu 3</li>
              <li>submenu 4</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold">Stuff</h1>
            <ul className="mt-1">
              <li>submenu 1</li>
              <li>submenu 2</li>
              <li>submenu 3</li>
              <li>submenu 4</li>
            </ul>
          </div>
        </div>
        <p className="my-12 text-center text-sm font-light text-thBlue">
          Copyright 2022 Geoffrey LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
