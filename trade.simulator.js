export function simulateTrade(nft, price) {
  console.log("Simulating NFT trade:", nft.name);

  return {
    nft: nft.name,
    collection: nft.collection,
    salePrice: price,
    timestamp: Date.now()
  };
}
