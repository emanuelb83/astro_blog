---
title: "Implementazione dell'orchestratore P2P"
slug: orchestratore-p2p
pubDate: 2025-07-10
category: "ARCHITETTURA"
author: "Team DIP"
description: "Come abbiamo risolto il problema del coordinamento distribuito senza server centrale."
---

Il cuore del nostro framework è l’orchestratore P2P. In questa fase, ci siamo concentrati sull’eliminazione dei colli di bottiglia centrali e sull’adozione di un meccanismo decentralizzato per la sincronizzazione.

## Obiettivi

- Ridurre la latenza tra client
- Sincronizzazione affidabile delle scene distribuite
- Alta disponibilità senza dipendenza da server

## Soluzione scelta

Abbiamo adottato un modello ibrido tra gossip protocol e consenso locale. Ogni nodo negozia lo stato con i vicini attivi e converge rapidamente.

```ts
import { startOrchestrator } from 'dip/core';
startOrchestrator({ topology: 'mesh', syncInterval: 100 });
```

## Prossimi passi

- Introdurre fallback in WebRTC multi-hop
- Persistenza temporanea per handoff fra peer
