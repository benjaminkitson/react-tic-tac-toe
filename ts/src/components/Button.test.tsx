import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders the Button component", () => {
    render(<Button>Hello</Button>);

    screen.debug();
  });
});
