function properNounCorrection(str) {
  //  write code here.
  //split the word in an array (it gets separated by letter with comas in between)
  const arrayStr = str.split("");
  const result = [];
  //Convert to uppercase first letter
  //Conver to lowercase the rest of the letters
  result.push(arrayStr[0].toUpperCase());
  for (let i = 1; i < arrayStr.length; i++) {
    result.push(arrayStr[i].toLowerCase());
  }
  //Remove the comas and return
  return result.join("");
}

/**
 * Test Suite
 */
describe("properNounCorrection()", () => {
  it("adds proper noun capitalization", () => {
    // arrange
    const str = "pARiS";

    // act
    const result = properNounCorrection(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe("Paris");
  });

  it("properly cased words are still correct", () => {
    // arrange
    const str = "John";

    // act
    const result = properNounCorrection(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe("John");
  });
});
