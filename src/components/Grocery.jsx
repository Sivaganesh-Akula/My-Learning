import IncDec from "../redux/IncDec";
import Todos from "../redux/Todos";

const Grocery = () => {
  return (
    <div>
      <div className="p-2 m-2 mx-auto w-[60%] border bg-slate-100">
        <IncDec />
        <Todos />
      </div>
    </div>
  );
};
export default Grocery;
