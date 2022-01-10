---
title: La política monetaria
description: Codificada en su génesis, la política monetaria de Ubiq significa menos sorpresas en el futuro. Un sistema de control inflacionario predecible que tenga en cuenta la longevidad ayuda a lograr un equilibrio entre la simulación de escasez e incentivar a los mineros para asegurar la red.
icon: mdi-bank
createdAt: 2021-01-01T00:00:03.966Z
---

## Recompensas en bloque

UBQ se emite a través de la prueba de trabajo a los mineros en forma de recompensas en bloque. La política monetaria fue diseñada para mantener la inflación baja y predecible, al tiempo que garantizaba que los mineros siempre serían recompensados, manteniendo la red segura y evitando que surgiera un mercado de mineros de pago. Logramos esto comenzando con una reducción a la recompensa de bloque que los mineros reciben por 1 UBQ cada año, hasta que UIP16 se activó en enero de 2022, momento en el que se estableció la recompensa, y se mantiene en 1.5 UBQ para siempre.

<inflation-chart></inflation-chart>
<inflation-table></inflation-table>

## Uncle Rewards

El minero de un bloque tío recibe una recompensa de 0,5 x CURRENT_BLOCK_REWARD si se incluye en un bloque estándar con una profundidad no mayor a 1.

El minero de un bloque estándar que incluye un bloque de tío recibe una recompensa adicional de 1/32 x CURRENT_BLOCK_REWARD (por bloque de tío [máx: 2]) además de la recompensa de bloque estándar.

El minero de un tío bloque con una profundidad superior a 1 no recibe recompensa. Sin embargo, el minero de un bloque estándar que incluye a estos tíos aún recibe una recompensa de 1/32 x CURRENT_BLOCK_REWARD.

## Suministro máximo

Ubiq no tiene un suministro máximo fijo, lo que garantiza que siempre habrá suficiente UBQ para mantener y asegurar el ecosistema. Sin embargo, la tasa de inflación disminuye cada año y continuará haciéndolo para siempre, inalterada y predecible. Para contrarrestar la inflación a largo plazo, se introdujeron quemaduras de tarifas en UIP-16, incentivando el uso. Más uso en el mundo real, menos inflación.

## UIP-16

UIP-16 (también conocido como Orion) se activó el 9 de enero de 2022, introduciendo bloques 4 veces más rápidos y fijando el bloqueo a 1.5 UBQ por bloque.
