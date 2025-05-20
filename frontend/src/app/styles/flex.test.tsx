import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flex, FlexColumn, FlexRow } from "./flex";

describe("Flex", () => {
  it("Flex snapshot", () => {
    const { container } = render(<Flex $gap={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Flex with no gap", () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("FlexRow snapshot", () => {
    const { container } = render(<FlexRow />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("FlexColumn", () => {
    const { container } = render(<FlexColumn />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
