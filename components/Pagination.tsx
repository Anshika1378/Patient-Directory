interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ page, totalPages, setPage }: Props) {
  const visiblePages = 7; // max visible pages

  let start = Math.max(1, page - Math.floor(visiblePages / 2));
  let end = start + visiblePages - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - visiblePages + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex items-center gap-2 justify-center mt-6 flex-nowrap overflow-x-auto px-2">
      {/* Previous */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-2 rounded border flex-shrink-0
            ${page === p ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}
          `}
        >
          {String(p).padStart(2, "0")}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
      >
        Next
      </button>
    </div>
  );
}