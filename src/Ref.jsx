// import React, { useRef } from 'react';

// function MyInput({ placeholder, ref }) {
//   return <input placeholder={placeholder} ref={ref} />;
// }

// export default function App() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <MyInput placeholder="Type something..." ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }




import React, { forwardRef, useRef } from "react";

const MyInput = forwardRef(({ placeholder }, ref) => {
  return <input placeholder={placeholder} ref={ref} />;
});

export default function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput placeholder="Enter your name" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
