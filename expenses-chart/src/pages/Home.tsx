import { Chart } from "../components/Chart";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="max-w-[475px] w-full flex flex-col gap-4">
        <Header />
        <Chart />
      </div>
    </div>
  );
}