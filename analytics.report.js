export function generateReport(result) {
  console.log("----- NFT Trade Report -----");
  console.log("NFT:", result.nft);
  console.log("Collection:", result.collection);
  console.log("Sale Price:", result.salePrice, "ETH");
  console.log("Timestamp:", new Date(result.timestamp).toLocaleString());
  console.log("----------------------------");
}
