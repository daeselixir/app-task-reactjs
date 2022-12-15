import { useState } from "react";
import { FormControl, InputStyle } from "../../assets/wrappers/FormControl";

const Input = ({inputAddTask,handleChange}) => {
  

  return (
    <FormControl >
      <InputStyle
        type="text"
        placeholder="Add Tasks..."
        onChange={handleChange}
        value={inputAddTask}
        name="addTask"
      />
    </FormControl>
  );
};

export default Input;
