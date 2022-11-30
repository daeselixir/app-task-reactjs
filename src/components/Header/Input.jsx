import { useState } from "react";
import { FormControl, InputStyle } from "../../assets/wrappers/FormControl";

const Input = ({addInput,handleChange}) => {
  

  return (
    <FormControl >
      <InputStyle
        type="text"
        placeholder="Add Task..."
        onChange={handleChange}
        value={addInput}
        name="search"
      />
    </FormControl>
  );
};

export default Input;
