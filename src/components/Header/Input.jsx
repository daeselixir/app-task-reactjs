import { useState } from "react";
import { FormControl, InputStyle } from "../../assets/wrappers/FormControl";

const Input = ({addInput,handleChange}) => {
  


  // const handleSubmit = (e) => {
  //   console.log(e.event.target);
  //   onNewTask(search.trim());
  //   setSearch("");
  // };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

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
