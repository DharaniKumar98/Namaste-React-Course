import { render, screen } from "@testing-library/react";
import RestaurantCard, { resCardWithLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe(" Restaurant Card Component Testing Suite", () => {
  it("should render Restaurant Card Component with props data ", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const cardComponent = screen.getByText("Ajantha Tiffins & Meals");

    expect(cardComponent).toBeInTheDocument();
  });

  it("should render Restaurant Card Component with promoted label", () => {
    const RestaurantCardWithLabel = resCardWithLabel(RestaurantCard);
    render(<RestaurantCardWithLabel resData={MOCK_DATA} />);

    const labelElement = screen.getByText("Promoted");

    expect(labelElement).toBeInTheDocument();
  });
});
