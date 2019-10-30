import "jest";
import '@testing-library/jest-dom/extend-expect';
import RadioButton from "./radioButton.svelte";
import { render, cleanup, fireEvent } from "@testing-library/svelte";

describe("RadioButton Test Suite", () => {
  it("Check RadioButton by clicking in any part of component", async () => {
    const { container } = render(RadioButton);
    const radioButton = container.querySelector(".radio");
    const input = container.querySelector(".radio input");
    await fireEvent.click(radioButton);
    expect(input).toBeChecked();
  });

  it("Send label property", () => {
    const { getByLabelText } = render(RadioButton, {
      props: {
        label: "Blue",
        color: "blue",
      }
    });
    const radioButton = getByLabelText("Blue");
    expect(radioButton).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
