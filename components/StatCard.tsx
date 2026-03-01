interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-teal mb-1">{number}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}
