---
title: "Ottimizzazione delle performance con ECSY"
slug: ottimizzazione-ecsy
pubDate: 2025-06-30
category: "PERFORMANCE"
author: "Team DIP"
description: "Utilizzo del pattern ECS con ECSY per migliorare la scalabilità e l'efficienza nel rendering e nella logica."
---

ECSY è una libreria ECS (Entity Component System) sviluppata da Mozilla. Nella nostra architettura, si è rivelata fondamentale per ottenere aggiornamenti efficienti su grandi quantità di oggetti interattivi.

## Perché ECSY?

- Separazione netta tra dati e logica
- Performance prevedibile e parallelizzabile
- Riduzione del garbage collection

## Esempio base

```ts
const world = new World();
world
  .registerComponent(Position)
  .registerSystem(MovementSystem);
```

## Risultati

- Miglioramento del framerate medio del 32%
- Maggiore controllo nella distribuzione degli update fra peer
- Codice più modulare e manutenibile
