import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("", () => {

  it("Should render Body Component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();
  });

  it("Should render Body Component with exact search results for search event", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("test-resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInputElement = screen.getByTestId("searchInput");

    fireEvent.change(searchInputElement, { target: { value: "Pizza" } });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("test-resCard");

    expect(cards.length).toBe(4);
  });

  it("Should render Body Component with top rated restaurants on click of Top Rated Restaurants Button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const resCardsBeforeFilter = screen.getAllByTestId("test-resCard");
    expect(resCardsBeforeFilter.length).toBe(20);

    const trrBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(trrBtn);
    const resCardsAfterFilter = screen.getAllByTestId("test-resCard");

    expect(resCardsAfterFilter.length).toBe(6);
  });
});
