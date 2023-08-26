import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import ProductSlide from "./product-slide";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market product slide", () => {
  const wrapper = shallow(<ProductSlide />);
  expect(wrapper.length).toBe(1);
});

test("testing maping in market product slide", () => {
  const productData = [
    {
      id: 1,
      title: "پیشنهاد شگقت انگیز",
      path: null,
      product: [
        {
          id: 1,
          name: "کامپوزیت سارمکو",
          path: "/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه مانگو طب",
          price: "12000",
          rating: 3,
          comment: "12",
        },
      ],
    },
  ];

  const wrapper = shallow(<ProductSlide productData={productData} />);
  const findDiv = wrapper.find("[data-test='data-product']");

  const texts = findDiv.map((node) => node.text());
  expect(texts.length).toBe(1);
});
