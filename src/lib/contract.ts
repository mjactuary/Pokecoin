import { getContract } from "thirdweb";
  import { defineChain } from "thirdweb/chains";
  import { client } from "./client";

export const contract = getContract({
    client,
    chain: defineChain(1135),
    address: "0x88b166d30905F441CC61d8053DBbe254189a2F05",
  });