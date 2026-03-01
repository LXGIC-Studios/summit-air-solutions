import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-charcoal mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Link href="/contact" className="text-teal text-sm font-semibold hover:text-teal-dark transition-colors">
        Schedule Now →
      </Link>
    </div>
  );
}
