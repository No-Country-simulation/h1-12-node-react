import React from "react";
import bell from "../images/bell-icon.svg";

export default function BellIndicator({ onClick }) {
  return (
    <button
      className="btn btn-ghost p-0 absolute top-0 right-0 w-6 h-6"
      onClick={onClick}
    >
      <div className=" indicator">
        <img src={bell} alt="bell notification icon" className="w-6 h-6 " />
        <span className="w-3 h-3 badge badge-xs indicator-item indicator-top indicator-end  badge-warning text-sm">
          1
        </span>
      </div>
    </button>
  );
}
