import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render cartItems upon add items into the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const itemAccHeader = screen.getByText("Cheese Volcano (8)");

  fireEvent.click(itemAccHeader);

  const menuItems = screen.getAllByTestId("menuItem");
  expect(menuItems.length).toBe(8);

  const menuIts = screen.getAllByRole("button", { name: "ADD" });
  //   console.log(menuIts[0]);
  fireEvent.click(menuIts[0]);

  //   fireEvent.click(addBtns[1]);

  const cartItemsCount = screen.getByText("1");
  expect(cartItemsCount).toBeInTheDocument();
  fireEvent.click(menuIts[1]);
  const cartItemsCount2 = screen.getByText("2");
  expect(cartItemsCount2).toBeInTheDocument();

  const cardsInCart = screen.getAllByTestId("menuItem");
  expect(cardsInCart.length).toBe(10);

  const ccbtn = screen.getByRole("button",{name:"Clear Cart"});
  fireEvent.click(ccbtn);
  expect(screen.getAllByTestId("menuItem").length).toBe(8);
  expect(screen.getByText("Cart is Empty. Add Items to the cart!")).toBeInTheDocument();

});
