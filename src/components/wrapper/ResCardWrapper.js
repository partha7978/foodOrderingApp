import React from "react";

const ResCardWrapper = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 px-4 py-1 rounded-md text-xs">Promoted</label>
        <Component {...props} />
      </div>
    );
  };
};

export default ResCardWrapper;
