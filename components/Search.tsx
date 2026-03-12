interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function Search({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search patient..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full focus:placeholder-blue-500 focus:outline-none  focus:border-blue-500"
    />
  );
}