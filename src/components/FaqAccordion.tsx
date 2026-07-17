export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

/**
 * Accessible FAQ accordion using native <details>/<summary>.
 * Answers stay in the HTML for SEO/crawlers even when collapsed.
 */
export default function FaqAccordion({ items, className = '' }: FaqAccordionProps) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-[#0a1029]/50 rounded-xl border border-gray-700/50 overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 cursor-pointer select-none text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
            <h3 className="text-base md:text-lg font-semibold text-white m-0 leading-snug">
              {item.question}
            </h3>
            <svg
              className="w-5 h-5 flex-shrink-0 text-[#FFA500] transition-transform duration-200 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-5 pb-5 md:px-6 md:pb-5 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
            <p className="pt-4 m-0">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
