import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Suite", () => {
  beforeAll(() => {
    console.log(
      "____________________________Before All__________________________"
    );
  });

  beforeEach(() => {
    console.log(
      "____________________________Before Each__________________________"
    );
  });

  afterAll(() => {
    console.log(
      "____________________________After All__________________________"
    );
  });

  afterEach(() => {
    console.log(
      "____________________________After Each__________________________"
    );
  })

  test("Should load Login Button inside Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //screen.debug();
    //const loginButton = screen.getByText("Login");
    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("Should load cart items equal to 0 inside Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItemsCount = screen.getByText("0");
    expect(cartItemsCount).toBeInTheDocument();
  });

  test("Should change Login button to Logout on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
