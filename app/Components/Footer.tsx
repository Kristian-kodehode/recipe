import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-20 fixed bottom-0 flex justify-center items-center bg-myPrimary">
      <div>
        <a
          href="https://github.com/Kristian-kodehode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl ">
          <h3 className="text-white hover:text-mySecondary">Github</h3>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
