import React from "react";
import userAvatar from "../images/jose.png";

export default function Avatar() {
  return (
    <div className="relative pr-4">
      <div
        className="avatar w-14 h-14 flex items-center justify-center rounded-full "
        style={{
          border: "2px solid transparent",
          borderRadius: "50%",
          backgroundImage:
            "linear-gradient(to bottom, #004E79 0%, #003C79 30%, #002279 60%, #4D0079 100%)",
          backgroundClip: "border-box",
          boxSizing: "border-box",
        }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            borderRadius: "50%",
          }}
        >
          <img
            alt="avatar"
            src={userAvatar}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
