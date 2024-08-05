import babelTraverse from "@babel/traverse";
import { parse, ParserPlugin } from "@babel/parser";
import generate from "@babel/generator";

const expectCode = (ast) => {
  expect(generate(ast).code).toMatchSnapshot();
};

it("works", () => {
  const code = `
export interface MyInterface {
    a: string;
    b: number;
}
`;

  const plugins: ParserPlugin[] = ["typescript"];

  const ast = parse(code, {
    sourceType: "module",
    plugins,
  });

  babelTraverse(ast, {
    TSTypeAliasDeclaration(path) {},
    TSInterfaceDeclaration(path) {
      path.node.id.name = "MyOtherInterface";
    },
  });

  expectCode(ast);
});
