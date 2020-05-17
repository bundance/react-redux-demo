import React from "react";
import { Provider } from "react-redux";
import fetchMock from "fetch-mock-jest";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import store from "../../app/store";
import { ROOT_ENDPOINT } from "../../config/config";

import BeerGrid from "./BeerGrid";

describe("BeerGrid", () => {
  let container = null;
  const mockBeerList = [
    {
      name: "IronBruDog",
      abv: "32",
      description: "mmmmm!",
      image_url: "http://example.com/image.gif",
    },
    {
      name: "Camden Hells",
      abv: "5",
      description: "tasty",
      image_url: "http://example.com/image.gif",
    },
    {
      name: "John Smiths",
      abv: "4.2",
      description: "creamy",
      image_url: "http://example.com/image.gif",
    },
  ];

  fetchMock.get(`${ROOT_ENDPOINT}beers`, mockBeerList);

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders beer data", async () => {
    render(
      <Provider store={store}>
        <BeerGrid id="123" />
      </Provider>,
      container
    );

    expect(await screen.findByAltText("IronBruDog")).toBeInTheDocument();
    expect(await screen.findByAltText("Camden Hells")).toBeInTheDocument();
    expect(await screen.findByAltText("John Smiths")).toBeInTheDocument();
  });
});
