interface Props {
  issue: string;
  setIssue: (value: string) => void;
}

export default function Filter({ issue, setIssue }: Props) {
  return (
    <div className="flex items-center gap-2 ">
      {/* Label */}
      <span className="font-medium text-gray-700">Filter:</span>

      {/* Dropdown */}
      <select
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Medical Issue</option>
        <option value="fever">Fever</option>
        <option value="headache">Headache</option>
        <option value="sore throat">Sore Throat</option>
        <option value="sprained ankle">Sprained Ankle</option>
        <option value="rash">Rash</option>
      </select>
    </div>
  );
}