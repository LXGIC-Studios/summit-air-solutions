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
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
    </svg>
  ),
  maintenance: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  ductwork: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  emergency: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
};

function ServiceIcon({ icon }: { icon: string }) {
  return iconMap[icon] || (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658 3.286a.267.267 0 01-.386-.295l1.079-6.305-4.583-4.469a.267.267 0 01.148-.455l6.327-.92 2.83-5.735a.267.267 0 01.478 0l2.83 5.735 6.327.92a.267.267 0 01.148.455l-4.583 4.47 1.079 6.304a.267.267 0 01-.386.295L12 15.17z" />
    </svg>
  );
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-9 border border-gray-100 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-teal" />
      <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
        <ServiceIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
      <Link href="/contact" className="text-teal font-semibold hover:text-teal-dark transition-colors duration-300 group-hover:underline">
        Schedule Now &rarr;
      </Link>
    </div>
  );
}
