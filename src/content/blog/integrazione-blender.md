---
title: "Integrazione di Blender nella pipeline distribuita"
slug: integrazione-blender
pubDate: 2025-07-05
category: "SVILUPPO"
author: "Team DIP"
description: "Come abbiamo collegato Blender alla piattaforma distribuita per l'importazione e sincronizzazione di scene 3D."
---

Blender è uno strumento potente e open-source per la modellazione e l’animazione 3D. Integrarlo nella nostra pipeline significava permettere agli utenti di caricare scene direttamente dal proprio editor.

## Obiettivi

- Importazione diretta di file `.blend`, `.glb`, `.gltf`
- Conversione in formato compatibile con la scena distribuita
- Sincronizzazione dei cambiamenti in tempo reale

## Toolchain

Abbiamo sviluppato un add-on per Blender che esporta in formato GLTF ottimizzato:

```python
bpy.ops.export_scene.gltf(filepath="/output/scene.gltf", export_apply=True)
```

## Risultati

L’integrazione consente agli utenti di modellare localmente e vedere gli aggiornamenti in diretta all’interno della scena condivisa.