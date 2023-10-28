import React from "react";
import SideBar from "@/components/navigation/SideBar";

describe("<SideBar />", () => {
  it("renders correctly", () => {
    cy.mount(<SideBar />);

    cy.contains(".first a", /top stories/i);

    cy.get('[alt="News app logo"]').should("be.visible");

    cy.get("li a").should("have.length", 5);
  });
});
