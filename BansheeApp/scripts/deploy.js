const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TicketMarketplace"
  const SYMBOL = "TM"

  // Deploy contract
  const TicketMarketplace = await ethers.getContractFactory("TicketMarketplace")
  const ticketMarketplace = await TicketMarketplace.deploy(NAME, SYMBOL)
  await ticketMarketplace.deployed()

  console.log(`Deployed TicketMarketplace Contract at: ${ticketMarketplace.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "Honest Drip",
      cost: tokens(1),
      tickets: 100,
      date: "August 27",
      time: "9:00PM EST",
      location: "Airdrop"
    }  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await ticketMarketplace.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});