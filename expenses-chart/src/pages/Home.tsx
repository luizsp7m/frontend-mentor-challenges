import { Chart } from "../components/Chart";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[475px] flex flex-col gap-4">
        <Header />
        <Chart />
      </div>
    </div>
  );
}