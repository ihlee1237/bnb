"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getAccommodations } from "./api";
import { ListingCard } from "./components/ListingCard";
import type { Accommodation } from "./interface";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
`;

export default function Home() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  useEffect(() => {
    getAccommodations().then((res) => setAccommodations(res));
  }, []);

  return (
    <div>
      <h1>숙소 목록</h1>
      <Row>
        {accommodations.map((accommodation: Accommodation) => (
          <ListingCard {...accommodation} key={accommodation.id} />
        ))}
      </Row>
    </div>
  );
}
