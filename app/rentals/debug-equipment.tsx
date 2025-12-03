// Temporary debug component - delete after verifying
import { sanityFetch } from "@/lib/sanity/client";

export default async function DebugEquipment() {
  const equipment = await sanityFetch<any[]>({ 
    query: `*[_type == "equipment"][0..5] {
      _id,
      name,
      quantity,
      category
    }`,
    tags: ["equipment"] 
  });
  
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Debug: Equipment Data</h2>
      <pre className="text-xs overflow-auto">
        {JSON.stringify(equipment, null, 2)}
      </pre>
    </div>
  );
}
