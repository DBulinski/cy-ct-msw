import { mount } from "../tests/mount";
import { Todos } from "./index";
import { worker } from "../tests/setupWorker";

beforeEach(async () => {
  await worker.start({
    serviceWorker: { url: "/public/mockServiceWorker.js" },
  });
});

describe("Todos", () => {
  it("should add todo", () => {
    mount(<Todos />);
    cy.findByLabelText("Add todo").type("Test todo");
    cy.findByLabelText("Submit").click();

    cy.findByText("Test todo").should("exist");
  });
});
