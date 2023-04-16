import React from "react";

/***** import components ******/
import { social } from "../data";

const Social = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            <a href={item.href} className="text-base">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
