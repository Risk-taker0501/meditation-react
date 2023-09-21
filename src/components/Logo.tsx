import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <h1 className="md:text-4xl text-[25px] font-medium font-this-july">
        <a href="/meditation-react/">
          <img className="h-[70px]" src="/meditation-react/images/logo-new.png" alt="logo" />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
