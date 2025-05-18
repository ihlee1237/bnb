"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type Accommodation = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function Home() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/accommodations`)
      .then((res) => setAccommodations(res.data.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">숙소 목록</h1>
      {accommodations.map((accommodation: Accommodation) => (
        <div key={accommodation.id} className="border p-4 mb-2">
          <h2 className="text-xl">{accommodation.name}</h2>
          <p>{accommodation.description}</p>
          <p>₩{accommodation.price}</p>
        </div>
      ))}
    </div>
  );
}
