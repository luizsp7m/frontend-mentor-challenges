export function Header() {
  return (
    <div className="flex justify-between items-center bg-soft-red p-8 rounded-2xl">
      <div>
        <span className="text-brown-50 text-md">My balance</span>
        <h1 className="text-brown-50 text-2xl font-bold tracking-wide mt-2">$921.48</h1>
      </div>

      <img src="/images/logo.svg" alt="Logo" />
    </div>
  );
}