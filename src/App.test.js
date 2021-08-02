import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("renders InputValid comps", () => {
    render(<App />);
    const IVComp = screen.getByTestId("iv");
    expect(IVComp).toBeVisible();
  });

  it("renders CollapsableList comps", () => {
    render(<App />);
    const CLComp = screen.getByTestId("cl");
    expect(CLComp).toBeVisible();
  });
});
