import React from "react";
import { shallow, mount } from "enzyme";

// SIT
import App from "./App";

it("renders without crashing", () => {
  const app = shallow(<App />);
});
