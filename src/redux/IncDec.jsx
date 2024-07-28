import { useDispatch, useSelector } from "react-redux";
import {
  decremented,
  incrementAsync,
  incremented,
  legacyDecrement,
  legacyIncrement,
} from "../store/counterSlice";

const IncDec = () => {
  const count = useSelector((state) => state.count);
  const legacyCount = useSelector((state) => state.legacyCount);
  const dispatch = useDispatch();

  const handleClick = (isInc) => {
    dispatch(isInc ? incrementAsync() : decremented());
  };

  const leegacyHandleClick = (isInc) => {
    dispatch(isInc ? legacyIncrement() : legacyDecrement());
  };

  return (
    <div className="flex justify-between m-2">
      <div>
        <span className="pr-2">Counter:</span>
        <button className="px-5 bg-green-300" onClick={() => handleClick(true)}>
          +
        </button>
        <span className="px-5">{count}</span>
        <button className="px-5 bg-red-300" onClick={() => handleClick(false)}>
          -
        </button>
      </div>
      <div>
        <span className="pr-2">Legacy Counter:</span>
        <button
          className="px-5 bg-green-300"
          onClick={() => leegacyHandleClick(true)}
        >
          +
        </button>
        <span className="px-5">{legacyCount}</span>
        <button
          className="px-5 bg-red-300"
          onClick={() => leegacyHandleClick(false)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default IncDec;
