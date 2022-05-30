import { ChartItem } from "./ChartItem";
import { Footer } from "./Footer";
import { Title } from "./Title";

const DATA = {
  MON: 14,
  TUE: 34,
  WEB: 52,
  THU: 31,
  FRI: 23,
  SAT: 43,
  SUN: 25,
}

export function Chart() {
  return (
    <div className="bg-brown-50 p-8 rounded-2xl flex flex-col">
      <Title />

      <div className="flex justify-between mt-8 mb-4">
        { Object.entries(DATA).map(([key, value]) => (
          <ChartItem 
            amount={value}
            day={key}
            key={key}
          />
        )) }
      </div>

      <Footer />
    </div>
  );
}