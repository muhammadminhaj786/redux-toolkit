import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {count} = useSelector((state) => state.counterSlice)

  return (
    <>
    <h1>child component </h1>
    <div>Navbar</div>
    count {count}
    </>
  )
}

export default Navbar

// import React, { memo } from "react";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   // console.log("Navbar console", dummyState);
//   const { count } = useSelector((state) => state.counterSlice);

//   return (
//     <div>
//       <h1>NAVBAR</h1>
//       count: {count}
//     </div>
//   );
// };

// // export default memo(Navbar);
// export default Navbar;