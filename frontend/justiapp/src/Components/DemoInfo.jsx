import React from "react";

export default function DemoInfo() {
  return (
    <div className="bg-base-200 collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>hello</p>
      </div>
    </div>
  );
}
