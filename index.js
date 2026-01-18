import { connectRPC } from "./rpc.client.js";
import { loadNFTs } from "./nft.registry.js";
import { simulateTrade } from "./trade.simulator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("NFT Marketplace Analytics Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const nfts = loadNFTs();

const tradeResult = simulateTrade(nfts[0], 1.2);
generateReport(tradeResult);
