---
title: Monetary Policy
description: Ubiq’s strict monetary policy means fewer surprises in the future. A predictable inflationary control system with longevity in mind helps strike a balance between simulating scarcity and incentivizing miners to secure the network.
icon: mdi-bank
createdAt: 2021-01-01T00:00:03.966Z
---

## Block Rewards

UBQ is issued into existence via proof-of-work to miners in the form of block rewards. The monetary policy was designed to keep inflation low and predictable while ensuring miners would always be rewarded, keeping the network secure and preventing a fee-only miners market from emerging. We achieve this by starting with a reduction to the block reward that miners receive by 1 UBQ each year, until UIP16 activated in January 2022, at which point the reward was set to, and stays at 1.5 UBQ forever.

<inflation-chart></inflation-chart>
<inflation-table></inflation-table>

## Uncle Rewards

The miner of an uncle block is rewarded 0.5 x CURRENT_BLOCK_REWARD if included into a standard block with a depth of no greater than 1.

The miner of a standard block which includes an uncle block is rewarded an additional 1/32 x CURRENT_BLOCK_REWARD (per uncle block [max: 2]) in addition to the standard block reward.

The miner of an uncle block with a depth of greater than 1 does not receive a reward. However, the miner of a standard block that includes these uncles is still rewarded 1/32 x CURRENT_BLOCK_REWARD.

## Max Supply

Ubiq has no fixed maximum supply, ensuring there will always be enough UBQ to sustain and secure the ecosystem. However, the rate of inflation decreases each year and will continue to do so forever, unaltered and predictable. To counter long term inflation, fee-burns were introduced in UIP-16, incentivizing usage. More real world usage, less inflation.

## UIP-16

UIP-16 (aka Orion) activated on January 9th 2022, introducing 4x faster blocks and fixing the blockreward to 1.5 UBQ per block. 
