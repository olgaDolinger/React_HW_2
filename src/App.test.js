import React from "react";
import "jest";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("test app", () => {
  it("should have core tags", () => {
    const sut = shallow(<App />);
    expect(sut).toContainReact(<div>Hello WebPack</div>);
  });
});
