const noBlockOnlyJsxReturn = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow arrow function components with block body returning only JSX and no prior logic",
    },
    messages: {
      blockWithoutLogic:
        "Avoid using block body with only JSX return. Use concise arrow function instead.",
    },
    schema: [],
  },

  create(context) {
    return {
      ArrowFunctionExpression(node) {
        const isJSXReturnOnly =
          node.body.type === "BlockStatement" &&
          node.body.body.length === 1 &&
          node.body.body[0].type === "ReturnStatement" &&
          node.body.body[0].argument?.type?.startsWith("JSX");

        if (isJSXReturnOnly) {
          context.report({
            node,
            messageId: "blockWithoutLogic",
          });
        }
      },
    };
  },
};

export default noBlockOnlyJsxReturn;
