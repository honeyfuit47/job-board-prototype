import VerificationBadge from "./VerificationBadge";

export default function ListingCard({ listing }) {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold">{listing.title}</h2>
          <p className="text-sm text-gray-600">
            {listing.neighborhood} • {listing.distanceKm} km
          </p>
        </div>
        <VerificationBadge status={listing.verification} />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-lg font-semibold">${listing.price}/mo</p>
        <p className="text-sm text-gray-600">{listing.type}</p>
      </div>

      {listing.flags.includes("cash_only") && (
        <div className="mt-3 text-sm bg-yellow-50 border border-yellow-200 rounded-lg p-2">
          ⚠️ Warning: Listing includes “cash only” — verify before committing.
        </div>
      )}

      <p className="mt-3 text-xs text-gray-500">Posted: {listing.postedAt}</p>
    </div>
  );
}
