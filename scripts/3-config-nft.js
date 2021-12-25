import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xE0DC1aa13c69eD22cCfdCc9A1f0aC1Cd82838286",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Recycling Mantra",
        description: "This NFT will give you access to BuyNothingDAO!",
        image: readFileSync("scripts/assets/recycle.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()