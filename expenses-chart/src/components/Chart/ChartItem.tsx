interface Props {
  day: string;
  amount: number;
}

export function ChartItem({ day, amount }: Props) {
  const height = Math.ceil(amount);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-12 h-[${height}rem] bg-soft-red rounded`}></div>
      <span className="text-sm text-brown-500">{day}</span>
    </div>
  );
}