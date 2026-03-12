import { NextResponse } from "next/server"
import data from "@/data/MOCK_DATA.json"
import { Patient } from "@/types/patient"

export async function GET(req:Request){

 const {searchParams} = new URL(req.url)

 const page = Number(searchParams.get("page")) || 1
 const limit = Number(searchParams.get("limit")) || 10
 const search = searchParams.get("search") || ""
 const sort = searchParams.get("sort") || "";
 const issue = searchParams.get("issue")?.toLowerCase() || "";

 let filtered : Patient[] = [...data];

 if(search){
  filtered = filtered.filter((p:Patient) =>
    p.patient_name.toLowerCase().includes(search.toLowerCase())
  );
 }
 if(issue){
  filtered = filtered.filter((p) =>
    p.medical_issue.toLowerCase().includes(issue)
  );
 }
  if (sort === "age_asc") {
    filtered = filtered.sort((a:Patient, b:Patient) => a.age - b.age);
  }

  if (sort === "age_desc") {
    filtered = filtered.sort((a:Patient, b:Patient) => b.age - a.age);
  }

 const start = (page-1)*limit
 const end = start+limit

 const result = filtered.slice(start,end)

 return NextResponse.json({
  total:filtered.length,
  page,
  limit,
  data:result
 })

}