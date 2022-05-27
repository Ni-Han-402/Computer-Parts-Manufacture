import ComputerPart from "./ComputerPart";
import useParts from "../../hooks/useParts";

const ComputerParts = () => {
  const [parts, setParts] = useParts();
  return (
    <div className="container mx-auto px-6 my-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary my-10">
        COMPUTER PARTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((item) => (
          <ComputerPart key={item._id} item={item}></ComputerPart>
        ))}
      </div>
    </div>
  );
};

export default ComputerParts;
