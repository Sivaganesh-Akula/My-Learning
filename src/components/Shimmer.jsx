const Shimmer = () => {
  return (
    <div className="shimmer">
      {[...Array(20)].map((ele, index) => {
        return <div key={index} className="shimmer-card"></div>;
      })}
    </div>
  );
};
export default Shimmer;
