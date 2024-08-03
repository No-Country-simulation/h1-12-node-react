import React from "react";

export default function BellIndicator({ onClick }) {
  return (
    <button
      className="m-0  btn btn-ghost z-10 p-0 absolute -right-8 w-14 h-14"
      onClick={onClick}
    >
      <div className=" indicator w-full">
        <img
          src="/images/icons/bell.svg"
          alt="bell notification icon"
          className="w-10 h-10 "
        />
        <span className="w-3 h-3 badge badge-xs indicator-item indicator-top indicator-end  badge-warning text-sm">
          1
        </span>
      </div>
    </button>
  );
}
