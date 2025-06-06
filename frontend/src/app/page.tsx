"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getRooms } from "./api/api";
import { ListingCard } from "./components/ListingCard";
import type { Room } from "./interface";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
`;

export default function Home() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    getRooms().then((res) => setRooms(res));
  }, []);

  return (
    <div>
      <h1>숙소 목록</h1>
      <Row>
        {rooms.map((room: Room) => (
          <Link
            key={room.id}
            href={`/rooms/${room.documentId}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <ListingCard {...room} />
          </Link>
        ))}
      </Row>
    </div>
  );
}
