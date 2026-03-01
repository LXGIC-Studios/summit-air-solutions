interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight">{number}</div>
      <div className="w-10 h-0.5 bg-teal mx-auto mb-3" />
      <div className="text-sm text-white/60 font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
}
