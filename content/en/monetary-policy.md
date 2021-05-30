---
title: Monetary Policy
description: Hard-coded at its genesis, Ubiq’s monetary policy means fewer surprises in the future. A predictable inflationary control system with longevity in mind helps strike a balance between simulating scarcity and incentivizing miners to secure the network.
icon: mdi-bank
createdAt: 2021-01-01T00:00:03.966Z
---

## Block Rewards

UBQ is issued into existence via proof-of-work to miners in the form of block rewards. The monetary policy was designed to keep inflation low and predictable while ensuring miners would always be rewarded, keeping the network secure and preventing a fee-only miners market from emerging. We achieve this by reducing the block reward that miners receive by 1 UBQ each year, until the reward reaches 1 UBQ per block, at which point the reward stays at 1 UBQ forever.

<inflation-chart></inflation-chart>
<inflation-table></inflation-table>

## Uncle Rewards

The miner of an uncle block is rewarded 0.5 x CURRENT_BLOCK_REWARD if included into a standard block with a depth no greater than 1.

The miner of the standard block, that includes the uncle block is rewarded an additional 1/32 x CURRENT_BLOCK_REWARD (per uncle block [max: 2]) in addition to the normal block reward.

Miners of uncle blocks with depths greater than 1 block do not receive a reward. However, the miner of the standard block that includes these uncles is still rewarded 1/32 x CURRENT_BLOCK_REWARD.

## Max Supply

Ubiq has no fixed maximum supply, ensuring there will always be enough UBQ to sustain and secure the ecosystem. However, the rate of inflation decreases each year and will continue to do so forever, unaltered and predictable.
