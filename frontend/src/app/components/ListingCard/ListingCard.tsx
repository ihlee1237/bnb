import type { Accommodation } from "@/app/interface";
import { FlexRow } from "@/app/styles/flex";
import { Label, Title } from "@/app/styles/typography";
import { formatDateRange } from "@/utils/date";
import { toKRW } from "@/utils/string";
import { differenceInDays } from "date-fns";
import styled from "styled-components";

const ImgContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 19 / 18;
    object-fit: cover;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ListingCard = ({
  imageSrc,
  price,
  rating,
  name,
  checkInDate,
  checkOutDate,
}: Omit<Accommodation, "id" | "description">) => {
  if (!imageSrc || !name) return;
  return (
    <CardContainer>
      <ImgContainer>
        <img src={imageSrc} alt={name} />
      </ImgContainer>
      <InfoContainer>
        <Title>{name}</Title>
        <Label>{formatDateRange(checkInDate, checkOutDate)}</Label>
        <FlexRow gap={4}>
          <Label>{toKRW(price)}</Label>
          <Label>{differenceInDays(checkOutDate, checkInDate)}박</Label>
          <Label>⭐ {rating}</Label>
        </FlexRow>
      </InfoContainer>
    </CardContainer>
  );
};

export default ListingCard;
