import { ChartItem } from "./ChartItem";
import { Footer } from "./Footer";
import { Title } from "./Title";

import data from "../../data.json";

export function Chart() {
  return (
    <div className="bg-brown-50 p-8 rounded-2xl flex flex-col">
      <Title />

      <div className="overflow-x-auto">
        <div className="flex items-end justify-between mt-8 mb-4">
          {data.map((chart, index) => (
            <ChartItem
              key={index}
              day={chart.day}
              amount={chart.amount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}