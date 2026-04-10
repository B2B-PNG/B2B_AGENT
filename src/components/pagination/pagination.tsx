import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, maxPage, onPageChange }: PaginationProps) => {
  if (maxPage <= 1) return null;

  const getPages = () => {

    if (maxPage <= 5) {
      return Array.from({ length: maxPage }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", maxPage];
    }

    if (currentPage >= maxPage - 2) {
      return [1, "...", maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", maxPage];
  };

  const pages = getPages();

  return (
    <div className="flex justify-center py-8">
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm">

        {/* Prev */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 border border-gray-400 rounded-xl disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page numbers */}
        {pages.map((p, index) =>
          p === "..." ? (
            <span key={index} className="px-2 text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p as number)}
              className={`px-3 py-2 rounded-xl border border-gray-200 text-sm transition ${
                currentPage === p
                  ? "bg-[#4a6fa5] text-white border-[#4a6fa5]"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, maxPage))}
          disabled={currentPage === maxPage}
          className="px-3 py-2 border border-gray-400 rounded-xl disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
};