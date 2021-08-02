import { fireEvent, render, screen } from "@testing-library/react";
import CollapsableList from "./CollapsableList";

describe("CollapsableList tests", () => {
  it("render part1 list", () => {
    render(<CollapsableList />);
    const FirstPart = screen.getByTestId("part1");
    expect(FirstPart).toBeVisible();
  });

  it("render part2 list", async () => {
    render(<CollapsableList />);
    const MoreBtn = screen.getByTestId("moreBtn");
    await fireEvent.click(MoreBtn);
    const SecondPart = screen.getByTestId("part2");
    expect(SecondPart).toBeVisible();
  });

  it("render more button", () => {
    render(<CollapsableList />);
    const FirstPart = screen.getByTestId("moreBtn");
    expect(FirstPart).toBeVisible();
  });

  it("render less button", async () => {
    render(<CollapsableList />);
    const MoreBtn = screen.getByTestId("moreBtn");
    await fireEvent.click(MoreBtn);
    const LessBtn = screen.getByTestId("lessBtn");
    expect(LessBtn).toBeVisible();
  });
});
