describe("User login with invalid email format", () => {
  it("should not allow user to log in with email missing '@'", () => {
    cy.visit("http://localhost:5173/");

    // Verifikasi bahwa kita berada di halaman login
    cy.url().should("include", "/");

    // Input email yang tidak valid (tanpa tanda @)
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214694mhs.dinus.ac.id")  // Email tanpa tanda @
      .should("have.value", "111202214694mhs.dinus.ac.id");

    // Input password yang valid
    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    // Klik tombol Login
    cy.get("button").contains("Login").click();

    // Verifikasi bahwa pesan kesalahan muncul (misalnya "Please enter a valid email address")
    cy.get("div").contains("Please enter a valid email address").should("be.visible");
  });
});
