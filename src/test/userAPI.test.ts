// src/test/user.test.ts
import { getTransformedUserData } from "../controllers/user";

describe("API Retrieval Test", () => {
  it("Creates Data from API", async () => {
    const summary = await getTransformedUserData();
    expect(summary).toBeDefined();
    expect(typeof summary).toBe("object");
  });
});
