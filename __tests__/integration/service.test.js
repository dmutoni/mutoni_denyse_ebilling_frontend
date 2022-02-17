import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BuyElectricityPage from "../../src/pages/BuyElectricityPage";

describe("Buy electricity", () => {
  test("should render input meter number", () => {
    render(
      <Router>
        <BuyElectricityPage />
      </Router>
    );
    const headingElement = screen.getByRole("heading", {
      name: /Buy electricity/i,
    });
    const placeholderElement = screen.getByPlaceholderText(/Meter number/i);
    expect(headingElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });

  test("should be able to type in input", () => {
    render(
      <Router>
        <BuyElectricityPage />
      </Router>
    );
    const inputElements = screen.getByPlaceholderText(/Meter number/i);
    fireEvent.change(inputElements, { target: { value: 123456 } });
    expect(inputElements.value).toBe(123456);
  });

  test("should send a request of electricity purchase", () => {
    render(
      <Router>
        <BuyElectricityPage />
      </Router>
    );

    const meterNumber = screen.getByPlaceholderText(/Meter number/i);
    fireEvent.change(meterNumber, { target: { value: 123456 } });
    const titleElement = screen.getByPlaceholderText(/Amount/i);
    fireEvent.change(titleElement, { target: { value: 12000 } });
    const postButtonElement = screen.getByRole("button", { name: /Buy/i });
    fireEvent.click(postButtonElement);

    const headingElement = screen.getByRole("heading", {
      name: /Buy electricity/i,
    });

    expect(headingElement).toHaveClass("buy_electricity");
  });
});
