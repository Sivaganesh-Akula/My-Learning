const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-10">
      {[...Array(20)].map((ele, index) => {
        return (
          <div
            key={index}
            className="w-[190px] h-[300px] bg-slate-200 m-2"
          ></div>
        );
      })}
    </div>
  );
};
export default Shimmer;
