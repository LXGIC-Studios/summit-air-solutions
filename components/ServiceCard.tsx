import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, React.ReactNode> = {
  heating: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 15a6.75 6.75 0 003.362-9.786z" />
    </svg>
  ),
  cooling: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18M3 12l4-4m-4 4l4 4m14-4l-4-4m4 4l-4 4" />
    </svg>
  ),
  airquality: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m6-6c2.5 0 4.5 1 6 3-1.5 2-3.5 3-6 3s-4.5-1-6-3c.5-.67 1.2-1.27 2-1.73M18 6c1.5 1.2 2.5 2.8 3 4.5M3 10.5c.5-1.7 1.5-3.3 3-4.5" />
    </svg>
  ),
  maintenance: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
};

function ServiceIcon({ icon }: { icon: string }) {
  return iconMap[icon] || null;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-9 border border-gray-100 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal/30 group">
      <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
        <ServiceIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
      <Link href="/contact" className="text-teal font-semibold hover:text-teal-dark transition-colors duration-300">
        Schedule Now &rarr;
      </Link>
    </div>
  );
}
