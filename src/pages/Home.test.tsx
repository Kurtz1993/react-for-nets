import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("HomeComponent", () => {
  it("should render an h1 with Home werks! text", () => {
    // Arrange
    const component = shallow(<Home />);

    // Act
    const h1 = component.find("h1");

    // Assert
    expect(h1.text()).toBe("Home werks!");
  });
});
