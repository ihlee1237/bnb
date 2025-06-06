import { postRoom } from "@/app/api/api";
import type { RoomRequest } from "@/app/interface";
import { faker } from "@faker-js/faker";

export const generateFakeRoom = (): RoomRequest => ({
  name: faker.location.streetAddress(),
  price: faker.number.int({ min: 100_000, max: 1_000_000 }),
  imageSrc: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 2 }),
  checkInDate: faker.date.past({ years: 0.1 }).toISOString(),
  checkOutDate: faker.date.future({ years: 0.1 }).toISOString(),
});

export const makeDummy = async () => {
  const data = generateFakeRoom();
  await postRoom(data, {
    token: process.env.NEXT_PUBLIC_API_TOKEN,
  });
};
