"use client";

import { useEffect, useState } from "react";

import Search from "@/components/Search";
import TableView from "@/components/TableView";
import CardView from "@/components/CardView";
import Pagination from "@/components/Pagination";
import Filter from "@/components/Filter";

export default function CataloguePage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [issue, setIssue] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState("table");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [debounceSearch, setDebounceSearch] = useState(search);

  // debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000); // 500ms delay

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // safe inside async
      try {
        const res = await fetch(
          `/api/data?page=${page}&limit=10&search=${debounceSearch}&sort=${sort}&issue=${issue}`,
        );
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, debounceSearch, sort, issue]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="bg-blue-500 grid grid-cols-2 text-white p-5 rounded mb-0">
        <div>
          <h1 className="text-2xl font-bold">Patient Directory</h1>
          <p>1000 Patient Found</p>
        </div>

        <div className="flex justify-end">
          <img src="/Group.png" alt="banner" className="h-16" />
        </div>
      </div>

      <div className="p-6 ">
        {/* TABLE / CARD TOGGLE */}

        <div className="border-b border-gray-300 flex gap-6 mb-4 ">
          <button
            onClick={() => setView("table")}
            className={`pb-2 ${
              view === "table"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Table
          </button>

          <button
            onClick={() => setView("card")}
            className={`pb-2 ${
              view === "card"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Card
          </button>
        </div>

        {/* SEARCH + FILTER + SORT */}

       {/* SEARCH + FILTER + SORT */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
  {/* Search Box */}
  <div className="w-full sm:w-1/2">
    <Search search={search} setSearch={setSearch} />
  </div>

  {/* Filter */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 w-full sm:w-auto">
    <span className="font-medium text-gray-700">Filter:</span>
    <select
      value={issue}
      onChange={(e) => setIssue(e.target.value)}
      className="border px-3 py-2 rounded w-full sm:w-auto"
    >
      <option value="">Medical Issue</option>
      <option value="fever">Fever</option>
      <option value="headache">Headache</option>
      <option value="sore throat">Sore Throat</option>
      <option value="sprained ankle">Sprained Ankle</option>
      <option value="rash">Rash</option>
    </select>
  </div>

  {/* Sort Dropdown */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 w-full sm:w-auto">
    <span className="font-medium text-gray-700">Sort:</span>
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border px-3 py-2 rounded w-full sm:w-auto"
    >
      <option value="">Age</option>
      <option value="" disabled>
        Sort by Age
      </option>
      <option value="age_asc">Age ↑</option>
      <option value="age_desc">Age ↓</option>
    </select>
  </div>
</div>

        {/* DATA VIEW */}

        {view === "table" && <TableView data={data} />}
        {view === "card" && <CardView data={data} />}

        {/* PAGINATION */}
        <Pagination page={page} totalPages={100} setPage={setPage} />
      </div>
    </>
  );
}
