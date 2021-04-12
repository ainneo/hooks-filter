import React from "react";

function Input({ placeholder, style, onKeyDown }, ref) {
  return (
    <>
      <h1>label</h1>
      <input
        onKeyDown={onKeyDown}
        ref={ref}
        type="text"
        placeholder={placeholder}
        style={style}
      />
    </>
  );
}

const ForwardedInput = React.forwardRef(Input);

export default ForwardedInput;
