---
title: Politique monétaire
description: Codée en dur à sa genèse, la politique monétaire d'Ubiq signifie moins de surprises à l'avenir. Un système de contrôle inflationniste prévisible et axé sur la longévité permet de trouver un équilibre entre la simulation de la rareté et l'incitation des mineurs à sécuriser le réseau.
icon: mdi-bank
createdAt: 2021-01-01T00:00:03.966Z
---

## Récompense de bloc

UBQ est émis à l'existence par preuve de travail aux mineurs sous forme de récompenses de bloc. La politique monétaire a été conçue pour maintenir l'inflation à un niveau faible et prévisible, tout en garantissant que les mineurs seront toujours récompensés, en maintenant la sécurité du réseau et en empêchant l'émergence d'un marché de mineurs uniquement rémunérés. Nous y parvenons en réduisant la récompense par bloc que les mineurs reçoivent de 1 UBQ chaque année, jusqu'à ce que la récompense atteigne 1 UBQ par bloc, après quoi la récompense reste à 1 UBQ pour toujours.

<inflation-chart></inflation-chart>
<inflation-table></inflation-table>

## Réconpense des oncles

Le mineur d'un bloc oncle est récompensé de 0,5 x CURRENT_BLOCK_REWARD s'il est inclus dans un bloc standard dont la profondeur n'est pas supérieure à 1.

Le mineur d'un bloc standard qui inclut un bloc oncle reçoit une récompense supplémentaire de 1/32 x CURRENT_BLOCK_REWARD (par bloc oncle [max : 2]) en plus de la récompense du bloc standard.

Le mineur d'un bloc oncle dont la profondeur est supérieure à 1 ne reçoit pas de récompense. Cependant, le mineur d'un bloc standard qui inclut ces oncles reçoit toujours une récompense de 1/32 x CURRENT_BLOCK_REWARD.

## Approvisionnement maximal

L'Ubiq n'a pas d'offre maximale fixe, ce qui garantit qu'il y aura toujours assez d'UBQ pour soutenir et sécuriser l'écosystème. Cependant, le taux d'inflation diminue chaque année et continuera à le faire pour toujours, de manière inaltérée et prévisible.
