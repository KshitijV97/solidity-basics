const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Addition', function () {
	it('Should return addition of two numbers', async function () {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy(4, 2);
		await greeter.deployed();
		expect(await greeter.addition()).to.equal(6);
	});
});

describe('Subtraction', function () {
	it('Should return subtraction of two numbers', async function () {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy(4, 2);
		await greeter.deployed();
		expect(await greeter.subtraction()).to.equal(2);
	});
});

describe('Multiplication', function () {
	it('Should return subtraction of two numbers', async function () {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy(4, 2);
		await greeter.deployed();
		expect(await greeter.multiplication()).to.equal(8);
	});
});

describe('Division', function () {
	it('Should return subtraction of two numbers', async function () {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy(4, 2);
		await greeter.deployed();
		expect(await greeter.division()).to.equal(2);
	});
});
