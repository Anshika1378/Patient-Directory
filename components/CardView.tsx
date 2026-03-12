import { AiOutlineMail } from "react-icons/ai"; 
import { IoCallOutline } from "react-icons/io5"; 
import { CiLocationOn } from "react-icons/ci"; 
import { Patient } from "@/types/patient";

interface Props {
  data: Patient[];
}

export default function CardView({ data }: Props) {

  function getIssueColor(issue:string){
    const value = issue.toLowerCase();
    if(value.includes("fever")) return "bg-red-200";
   if (value.includes("headche")) return "bg-orange-200";
    if (value.includes("throat")) return "bg-yellow-200";
    if (value.includes("sprained")) return "bg-green-200";
    if (value.includes("rash")) return "bg-pink-200";
    return "bg-gray-200";
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
      {data.map((p) => (
        <div
          key={p.patient_id}
          className="box-border border-gray-100 shadow-xl rounded-xl  bg-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 rounded-xl bg-blue-300">
            <div className="flex items-center gap-3">
              <img src={p.photo_url || "https://i.pravatar.cc/40"}  alt={p.patient_name} className="w-10 h-10 rounded-full object-cover p-1 ml-2 "
                onError={(e: any) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${p.patient_name}`;
                }}
              />

              <h2 className="font-semibold text-sm">{p.patient_name}</h2>
            </div>

            <span className="text-sm text-white bg-blue-500 rounded-2xl px-2  mr-2">Age: {p.age}</span>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold">
             <span className={`px-3 py-1 rounded text-sm text-black ${getIssueColor(p.medical_issue)}`}>{p.medical_issue}</span>
            </p>

            <p className="flex gap-2">
              <span className="font-medium"><CiLocationOn /></span>{" "}
              {p.contact?.[0]?.address}
            </p>

            <p className="flex gap-2">
              <span className="font-medium"><IoCallOutline /></span>{" "}
              {p.contact?.[0]?.number}
            </p>

            <p className="flex gap-2">
              <span className="font-medium"><AiOutlineMail /></span>{" "}
              {p.contact?.[0]?.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
