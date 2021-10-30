//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    int16 a;
    int16 b;
    
    constructor(int16 _a, int16 _b) {
        a = _a;
        b = _b;
    }

    function subtraction() view public returns (int16)
    {
        int16 ans = a - b ;
        return ans;
    }

    function addition() view public returns (int16)
    {
        int16 ans = a + b ;
        return ans;
    }

    function multiplication() view public returns (int16) {
        int16 ans = a * b ;
        return ans;
    }

    function division() view public returns (int16)
    {
        int16 ans = a / b ;
        return ans;
    }


}
