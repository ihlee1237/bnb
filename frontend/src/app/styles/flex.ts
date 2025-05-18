import styled from "styled-components";

export const Flex = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : "0")};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
