import Input from "./Input";
import Button from "./Button";
import { Header } from "../../assets/wrappers/Header";

const Wrapper = () => {
  return (
    <Header>
      <div className="form-control inp">
        <Input />
      </div>
      <div className="form-control btns">
        <Button />
      </div>
    </Header>
  );
};

export default Wrapper;
