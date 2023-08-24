import React from "react";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen , fireEvent } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Single from "./single";


Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<Single />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};



test("render component single product market", () => {
  const wrapper = setup();
  // const singleComponent = wrapper.find("[data-test='component-single']");
  const singleComponent = findByTestAttr(wrapper, "component-single");
  expect(singleComponent.length).toBe(1);
});

test("render button count product in single market", () => {
  const wrapper = setup();
  // const button = wrapper.find("[data-test='button-increment']");
  const button = findByTestAttr(wrapper, "button-increment");
  expect(button.length).toBe(1);
});

test("render count product in single market", () => {
  const wrapper = setup();
  // const counterDisplay = wrapper.find("[data-test='count-product']");
  const counterDisplay = findByTestAttr(wrapper, "count-product");
  expect(counterDisplay.length).toBe(1);

});

test('should first', () => { 
  const setState = jest.fn();
    jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(initState => [initState, setState]);
    const wrapper = setup();
 })



