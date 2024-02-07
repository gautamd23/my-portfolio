import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-10 px-16 py-5">
      <h1 className="text-3xl">Gautam Dhiman</h1>
      <div>
        <ul className="flex gap-9 text-2xl">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
