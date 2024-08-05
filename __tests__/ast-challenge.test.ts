import generate from "@babel/generator";
import genCode from "../src";
import exampleMethods from "../example-methods.json";
const expectCode = (ast) => {
  expect(generate(ast).code).toMatchSnapshot();
};

it("gen-code", () => {
  expectCode(genCode(exampleMethods));
});
