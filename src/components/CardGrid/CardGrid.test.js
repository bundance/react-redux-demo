import React from "react";
import { render } from "@testing-library/react";

import { CardGrid } from "./CardGrid";

describe("CardGrid", () => {
  test("calls the renderCard render prop once for each card passed in", () => {
    const mockCards = [1, 2, 3];
    const mockRenderCardFn = jest.fn();
    render(<CardGrid cards={mockCards} renderCard={mockRenderCardFn} />);

    expect(mockRenderCardFn).toHaveBeenCalledTimes(mockCards.length);
  });

  test("renders 3 cards per row by default", () => {
    const mockCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mockRenderCardFn = jest.fn();
    const { container } = render(
      <CardGrid cards={mockCards} renderCard={mockRenderCardFn} />
    );

    expect(container).toMatchSnapshot();
  });

  test("render 4 cards per row", () => {
    const mockCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mockRenderCardFn = jest.fn();
    const { container } = render(
      <CardGrid
        cards={mockCards}
        renderCard={mockRenderCardFn}
        cardsPerrow={4}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
