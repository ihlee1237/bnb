"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getAccommodations } from "./api";
import { ListingCard } from "./components/ListingCard";
import type { Accommodation } from "./interface";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;

export default function Home() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  useEffect(() => {
    getAccommodations().then((res) => setAccommodations(res));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">숙소 목록</h1>
      {accommodations.map((accommodation: Accommodation) => (
        <Row key={accommodation.id}>
          <ListingCard {...accommodation} />
        </Row>
      ))}
    </div>
  );
}
