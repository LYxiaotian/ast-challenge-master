import generate from "@babel/generator";
import * as t from "@babel/types";

const expectCode = (ast) => {
  expect(generate(ast).code).toMatchSnapshot();
};

it("works", () => {
  expectCode(
    t.file(
      t.program([
        t.variableDeclaration("const", [
          t.variableDeclarator(
            t.identifier("myCoolFunction"),
            t.arrowFunctionExpression(
              [t.identifier("some")],
              t.blockStatement([])
            )
          ),
        ]),
      ])
    )
  );
});
