export function Footer() {
  return (
    <div className="flex gap-3 justify-between items-end border-t pt-6 border-t-brown-100">
      <div>
        <span className="text-md text-brown-500">Total this month</span>
        <h1 className="text-md sm:text-4xl text-brown-900 font-bold tracking-wide mt-2">$478.33</h1>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-md font-bold text-brown-900 tracking-wide">+2.4%</span>
        <h5 className="text-md text-brown-500">from last month</h5>
      </div>
    </div>
  );
}