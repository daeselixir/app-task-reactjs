import Input from "./Input";
import Button from "./Button";
import { Header } from "../../assets/wrappers/Header";

const Wrapper = ({ value, handleChange, handleSubmit }) => {
  return (
    <Header onSubmit={handleSubmit}>
      <div className="form-control inp">
        <Input addInput={value} handleChange={handleChange} />
      </div>
      <div className="form-control btns">
        <Button type='submit' />
      </div>
    </Header>
  );
};

export default Wrapper;
