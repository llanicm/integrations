export default function (plop) {
  plop.setGenerator("integration", {
    description: "Create a new integration",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the integration?",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "apps/{{name}}",
        base: "apps/base",
        templateFiles: "apps/base/**/*",
      },
    ],
  });
}