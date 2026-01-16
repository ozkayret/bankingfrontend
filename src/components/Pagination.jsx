import React from "react";

const MAX_VISIBLE_PAGES = 20;

const Pagination = ({
  page, // 0-based
  pageSize,
  totalRecords,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalRecords / pageSize);

  const startRecord = totalRecords === 0 ? 0 : page * pageSize + 1;
  const endRecord = Math.min((page + 1) * pageSize, totalRecords);

  const buildPages = () => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const pages = [];
    const half = Math.floor((MAX_VISIBLE_PAGES - 4) / 2);

    const start = Math.max(1, page - half);
    const end = Math.min(totalPages - 2, page + half);

    pages.push(0);

    if (start > 1) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 2) pages.push("...");

    pages.push(totalPages - 1);

    return pages;
  };

  const pages = buildPages();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t px-4 py-3 text-black">
      <div className="text-sm text-gray-700">
        Toplam <strong>{totalRecords}</strong> kayıttan{" "}
        <strong>{startRecord}</strong> ile <strong>{endRecord}</strong> arası{" "}
        gösteriliyor
      </div>

      <div className="flex items-center gap-1">
        <button
          disabled={page === 0}
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Önceki
        </button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-3 py-1 border rounded ${
                p === page ? "bg-indigo-600 text-black" : ""
              }`}
            >
              {p + 1}
            </button>
          )
        )}

        <button
          disabled={page === totalPages - 1}
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Sonraki
        </button>
      </div>
      <div className="flex items-center">
          <div className="text-sm text-gray-700">
        Bir sayfada:
      </div>
        <select
          value={pageSize}
          onChange={(e) => {
            onPageSizeChange(Number(e.target.value));
            onPageChange(0); // reset to page 1
          }}
          className="border rounded px-2 py-1"
        >
          <option value={10}>10 Kayıt Göster</option>
          <option value={25}>25 Kayıt Göster</option>
          <option value={50}>50 Kayıt Göster</option>
          <option value={100}>100 Kayıt Göster</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
