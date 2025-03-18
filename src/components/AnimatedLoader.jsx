import React from "react";

const AnimatedLoader = () => {
  const text = "ICT VISTA".split("");

  return (
    <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="relative w-[600px] h-[36px] flex">
        {text.map((char, index) => (
          <span
            key={index}
            className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] text-2xl font-bold"
            style={{
              animation: `move 2s linear infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLoader;
