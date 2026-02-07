const styles = {
  verified: "bg-green-50 text-green-700 border-green-200",
  student_confirmed: "bg-blue-50 text-blue-700 border-blue-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  unverified: "bg-gray-50 text-gray-700 border-gray-200",
};

const labels = {
  verified: "Verified",
  student_confirmed: "Student-confirmed",
  pending: "Pending",
  unverified: "Unverified",
};

export default function VerificationBadge({ status }) {
  const cls = styles[status] ?? styles.unverified;
  const label = labels[status] ?? labels.unverified;

  return (
    <span className={`text-xs border rounded-full px-2 py-1 ${cls}`}>
      {label}
    </span>
  );
}
