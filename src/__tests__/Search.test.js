import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body", () => {
  // beforeAll(() => console.log("Before All"));

  // beforeEach(() => console.log("Before Each"));

  // afterAll(() => console.log("After All"));

  // afterEach(() => console.log("After Each"));

  test("should render body component with search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    expect(screen.getAllByTestId("resCard").length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "roll" } });
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
  });

  test("should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(20);

    const topRatedBtn = screen.getByText(/top rated restaurants/i);
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(5);
  });
});
