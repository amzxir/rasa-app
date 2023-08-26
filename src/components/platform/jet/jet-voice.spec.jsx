import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import JetVoice from "./jet-voice";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform jet text", () => {
  const wrapper = shallow(<JetVoice />);
  expect(wrapper.length).toBe(1);
});
