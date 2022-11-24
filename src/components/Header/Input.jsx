import { useState } from "react";
import {FormControl,InputStyle} from '../../assets/wrappers/FormControl'

const Input = ({ onNewTask }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    console.log(e.event.target);
    onNewTask(search.trim());
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <FormControl onSubmit={handleSubmit}>
      <InputStyle
        type="text"
        placeholder="Add Task..."
        onChange={handleChange}
        value={search}
        name="search"
      />
    </FormControl>
  );
};

export default Input;
