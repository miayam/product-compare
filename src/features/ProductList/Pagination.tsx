interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination = ({ page, totalPages, setPage }: Props) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 border border-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition"
      >
        Prev
      </button>

      <span className="font-mono text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 border border-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
