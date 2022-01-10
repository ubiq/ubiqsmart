---
title: Politique monétaire
description: Codée en dur à sa genèse, la politique monétaire d'Ubiq signifie moins de surprises à l'avenir. Un système de contrôle inflationniste prévisible et axé sur la longévité permet de trouver un équilibre entre la simulation de la rareté et l'incitation des mineurs à sécuriser le réseau.
icon: mdi-bank
createdAt: 2021-01-01T00:00:03.966Z
---

## Récompense de bloc

L'UBQ est délivré via une preuve de travail aux mineurs sous la forme de récompenses de bloc. La politique monétaire a été conçue pour maintenir l'inflation à un niveau bas et prévisible tout en veillant à ce que les mineurs soient toujours récompensés, en assurant la sécurité du réseau et en empêchant l'émergence d'un marché des mineurs à honoraires seulement. Nous y parvenons en commençant par une réduction de la récompense de bloc que les mineurs reçoivent de 1 UBQ chaque année, jusqu'à ce que uIP16 soit activé en janvier 2022, date à laquelle la récompense a été fixée, et reste à 1,5 UBQ pour toujours.

<inflation-chart></inflation-chart>
<inflation-table></inflation-table>

## Réconpense des oncles

Le mineur d'un bloc oncle est récompensé de 0,5 x CURRENT_BLOCK_REWARD s'il est inclus dans un bloc standard dont la profondeur n'est pas supérieure à 1.

Le mineur d'un bloc standard qui inclut un bloc oncle reçoit une récompense supplémentaire de 1/32 x CURRENT_BLOCK_REWARD (par bloc oncle [max : 2]) en plus de la récompense du bloc standard.

Le mineur d'un bloc oncle dont la profondeur est supérieure à 1 ne reçoit pas de récompense. Cependant, le mineur d'un bloc standard qui inclut ces oncles reçoit toujours une récompense de 1/32 x CURRENT_BLOCK_REWARD.

## Approvisionnement maximal

Ubiq n'a pas d'approvisionnement maximal fixe, ce qui garantit qu'il y aura toujours suffisamment d'UBQ pour soutenir et sécuriser l'écosystème. Cependant, le taux d'inflation diminue chaque année et continuera de le faire pour toujours, inchangé et prévisible. Pour contrer l'inflation à long terme, des frais ont été introduits dans l'UIP-16, incitant à l'utilisation. Plus d'utilisation dans le monde réel, moins d'inflation.

## UIP-16

UIP-16 (alias Orion) a été activé le 9 janvier 2022, introduisant des blocs 4 fois plus rapides et fixant le blockreward à 1,5 UBQ par bloc.
