//Assert test for computerPlay
function assertComputerPlay() {
  var result = computerPlay();
  console.assert(testForProperChoice(result), "Result did not fall within desired values");
}

//Test ComputerPlay for number of iterations passed
function loopAssertComputerPlay(iterations){
  let i = 0;
  while(i < iterations){
    assertComputerPlay();
    i++;
  }
  return i;
}
