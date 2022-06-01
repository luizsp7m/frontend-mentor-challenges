interface Props {
  day: string;
  amount: number;
}

export function ChartItem({ day, amount }: Props) {
  const height = amount;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex flex-col items-center group cursor-pointer">
        <span className="bg-brown-900 text-sm text-brown-50 font-bold p-2 rounded-md invisible group-hover:visible">{amount}</span>

        <div
          className={`mt-2 ${height >= 50 ? "bg-cyan" : "bg-soft-red"} w-11 rounded group-hover:opacity-80 transition-colors cursor-pointer flex justify-center`}
          style={{
            height: `${height / 6}rem`,
          }}
        />
      </div>

      <span className="text-sm text-brown-500">{day}</span>
    </div>
  );
}