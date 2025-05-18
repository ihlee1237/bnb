import { styled } from "styled-components";

export const typography = {
  title: {
    small: `
      font-size: 0.8125rem;
      color: #222222;
      line-height: 16px;
      font-weight: 500;
    `,
  },
  label: {
    small: `
      font-size: 0.6875rem;
      line-height: 13px;
      color: #6A6A6A;
    `,
  },
};

export const Title = styled.div<{ size?: "small" }>`
  ${({ size }) => {
    switch (size) {
      default:
        return typography.title.small;
    }
  }}`;

export const Label = styled.div<{ size?: "small" }>`
  ${({ size }) => {
    switch (size) {
      default:
        return typography.label.small;
    }
  }}`;
