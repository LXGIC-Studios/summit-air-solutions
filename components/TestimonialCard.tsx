interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export default function TestimonialCard({ quote, name, location, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="text-teal mb-3">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <p className="text-gray-700 text-sm mb-4 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <div className="font-semibold text-charcoal text-sm">{name}</div>
        <div className="text-xs text-gray-500">{location}</div>
      </div>
    </div>
  );
}
