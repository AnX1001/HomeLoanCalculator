import { CalculateEligibleLoan, CalculateLoanNeed } from "./Formulas";

describe("CalculateEligibleLoan", () => {
  it("should calculate eligible loan as five times the income minus debt", () => {
    const result = CalculateEligibleLoan({ debt: 10000, income: 50000 });
    expect(result).toBe(240000);
  });

  it("should handle zero debt correctly", () => {
    const result = CalculateEligibleLoan({ debt: 0, income: 50000 });
    expect(result).toBe(250000);
  });

  it("should handle zero income correctly", () => {
    const result = CalculateEligibleLoan({ debt: 10000, income: 0 });
    expect(result).toBe(-10000);
  });
});

describe("CalculateLoanNeed", () => {
  it("should correctly calculate the loan amount as the property price minus equity", () => {
    const result = CalculateLoanNeed({ propertyPrice: 300000, equity: 50000 });
    expect(result).toBe(250000);
  });

  it("should handle zero equity correctly", () => {
    const result = CalculateLoanNeed({ propertyPrice: 300000, equity: 0 });
    expect(result).toBe(300000);
  });

  it("should handle zero property price correctly", () => {
    const result = CalculateLoanNeed({ propertyPrice: 0, equity: 50000 });
    expect(result).toBe(-50000);
  });
});
