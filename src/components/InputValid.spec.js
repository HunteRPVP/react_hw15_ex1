import { fireEvent, render, screen } from "@testing-library/react";
import InputValid from "./InputValid";

describe("InputValid tests", () => {
  it("validate correct email", async () => {
    render(<InputValid />);
    const EmailInput = screen.getByTestId("emailInput");
    await fireEvent.change(EmailInput, { target: { value: "asd@gmail.com" } });
    const ErrorMsg = screen.getByTestId("validMsg");
    expect(ErrorMsg).toBeVisible();
  });

  it("validate incorrect email", async () => {
    render(<InputValid />);
    const EmailInput = screen.getByTestId("emailInput");
    await fireEvent.change(EmailInput, { target: { value: "asd" } });
    const ErrorMsg = screen.getByTestId("errorMsg");
    expect(ErrorMsg).toBeVisible();
  });
});
