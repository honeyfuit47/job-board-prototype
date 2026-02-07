export default function FiltersBar({
  query,
  setQuery,
  type,
  setType,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex-1">
        <label className="text-sm font-medium">Search</label>
        <input
          className="mt-1 w-full border rounded-lg px-3 py-2"
          placeholder="e.g., Sandy Hill, room, downtown..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="w-full sm:w-44">
        <label className="text-sm font-medium">Type</label>
        <select
          className="mt-1 w-full border rounded-lg px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Room">Room</option>
          <option value="1BR">1BR</option>
          <option value="2BR">2BR</option>
        </select>
      </div>

      <div className="w-full sm:w-48">
        <label className="text-sm font-medium">Max Price</label>
        <input
          type="number"
          className="mt-1 w-full border rounded-lg px-3 py-2"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)} // keep string so it can be empty
          placeholder="e.g., 2500"
          min="0"
        />
      </div>
    </div>
  );
}
