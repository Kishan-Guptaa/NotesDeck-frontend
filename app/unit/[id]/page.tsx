"use client";

import { use, useEffect, useState } from "react";

export default function UnitPage({ params }: any) {
  const { id } = params;

  const [unit, setUnit] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/note/${id}`);
      const json = await res.json();
      setUnit(json.data);
    }
    load();
  }, []);

  if (!unit) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Unit Content</h1>

      {unit.blocks.map((b: any) => (
        <p key={b.id} className="mb-3">{b.text}</p>
      ))}
    </div>
  );
}
