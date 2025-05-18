import { getRoom } from "@/app/api";
import { toKRW } from "@/utils/string";

type Props = { params: Promise<{ id: string }> };

export default async function RoomDetailPage(promise: Promise<Props>) {
  const { params } = await promise;
  const { id } = await params;

  try {
    const res = await getRoom(id, true);

    return (
      <div style={{ padding: "2rem" }}>
        <h1>{res.name}</h1>
        <img src={res.imageSrc} alt={res.name} width={400} />
        <p>가격: {toKRW(res.price)}</p>
        <p>평점: {res.rating}</p>
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
