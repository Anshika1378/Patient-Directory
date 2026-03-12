import { Patient } from "@/types/patient";

interface Props {
  data: Patient[];
}

export default function TableView({ data }: Props) {
  function getIssueColor(issue: string) {
    const value = issue.toLowerCase();
    if (value.includes("fever")) return "bg-red-200 ";
    if (value.includes("headche")) return "bg-orange-200";
    if (value.includes("throat")) return "bg-yellow-200";
    if (value.includes("sprained")) return "bg-green-200";
    if (value.includes("rash")) return "bg-pink-200";
    return "bg-gray-200";
  }
  function getEmptyNa(value?: string) {
    return !value ? "text-red-500 font-medium" : "";
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-blue-500">ID</th>
            <th className="border px-4 py-2 text-blue-500">Name</th>
            <th className="border px-4 py-2 text-blue-500">Age</th>
            <th className="border px-4 py-2 text-blue-500">Medical Issue</th>
            <th className="border px-4 py-2 text-blue-500">Address</th>
            <th className="border px-4 py-2 text-blue-500">Phone</th>
            <th className="border px-4 py-2 text-blue-500">Email</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {data.map((p) => (
            <tr key={p.patient_id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{p.patient_id}</td>

              {/* IMAGE + NAME */}
              <td className="border px-4 py-2">
                <div className="flex items-center gap-3">
                  <img
                    src={p.photo_url || "https://i.pravatar.cc/40"}
                    alt={p.patient_name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <span>{p.patient_name}</span>
                </div>
              </td>

              <td className="border px-4 py-2">{p.age}</td>

              <td className="border px-4 py-2">
                <span
                  className={`px-3 py-1 rounded text-black text-sm ${getIssueColor(p.medical_issue)}`}
                >
                  {p.medical_issue}
                </span>
              </td>

              <td className="border px-4 py-2">
                <span className={getEmptyNa(p.contact?.[0]?.address)}>
                  {p.contact?.[0]?.address || "NA"}
                </span>
              </td>

              <td className="border px-4 py-2">
                <span className={getEmptyNa(p.contact?.[0]?.number)}>
                  {p.contact?.[0]?.number || "NA"}
                </span>
              </td>

              <td className="border px-4 py-2">
                <span className={getEmptyNa(p.contact?.[0]?.email)}>
                  {p.contact?.[0]?.email || "NA"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
