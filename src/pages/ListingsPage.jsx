import { useMemo, useState } from "react";
import { listings as seedListings } from "../data/listings";
import FiltersBar from "../ui/FiltersBar";
import ListingCard from "../ui/ListingCard";

export default function ListingsPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [maxPrice, setMaxPrice] = useState("2500"); // string so input can be empty

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase();

    // Empty maxPrice means "no max"
    const max =
      maxPrice.trim() === "" ? Number.POSITIVE_INFINITY : Number(maxPrice);

    return seedListings
      .filter((l) => {
        const matchesQuery =
          q.length === 0 ||
          l.title.toLowerCase().includes(q) ||
          l.neighborhood.toLowerCase().includes(q);

        const matchesType = type === "All" || l.type === type;

        const priceNum = Number(l.price);
        const matchesPrice = Number.isFinite(priceNum)
          ? priceNum <= max
          : true;

        return matchesQuery && matchesType && matchesPrice;
      })
      .sort((a, b) => {
        const da = new Date(a.postedAt).getTime();
        const db = new Date(b.postedAt).getTime();
        return (db || 0) - (da || 0);
      });
  }, [query, type, maxPrice]);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HERO HEADER WITH BACKGROUND IMAGE */}
      <header className="relative">
        {/* Background image (place file at /public/hero.jpg) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        {/* Header content */}
        <div className="relative z-10 px-4 py-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-start justify-between gap-4 text-white">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Student Listings
                </h1>
                <p className="mt-2 text-sm sm:text-base text-white/85">
                  Prototype demo: filters + verification states are simulated (no backend).
                </p>
              </div>

              <span className="text-xs sm:text-sm bg-white/90 text-gray-900 rounded-full px-3 py-1">
                {filteredListings.length} results
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full px-4 py-6">
        <div className="max-w-screen-2xl mx-auto">
          <FiltersBar
            query={query}
            setQuery={setQuery}
            type={type}
            setType={setType}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="mt-10 text-center text-sm text-gray-600">
              No matches. Try clearing the search, changing type, or increasing max price.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
