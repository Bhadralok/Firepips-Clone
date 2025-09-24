export default function DashboardFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center shadow-[0_-14px_20px_rgba(0,0,0,.1)] h-14 justify-center text-secondary-black">
      <p>&copy; {year} Firepips Company Limited. All Right Reserved</p>
    </div>
  );
}
