import { NumberBox } from "./NumberBox";

interface numProp {
  num: string | number;
  unit: string;
}

export const CounterDigit = ({ num, unit }: numProp) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div>
        <NumberBox num={num} />
        <div>{num}</div>
      </div>
      <p className="text-lg mt-3 font-semibold text-rose-200 md:text-2xl ">
        {unit}
      </p>
    </div>
  );
};
