interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 tracking-tight">{number}</div>
      <div className="text-sm text-gray-400 font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
}
