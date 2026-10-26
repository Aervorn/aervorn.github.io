---
title: Comment écrire un article sur ce blog
description: Un article modèle qui montre toutes les options de mise en forme. C'est un brouillon, il n'apparaît qu'avec npm run dev.
date: 2026-10-26
category: making-of
tags: [astro, modèle]
draft: true
---

Cet article est un **brouillon** : il apparaît avec `npm run dev`, mais il n'est jamais publié. Copiez-le pour démarrer un nouvel article, puis modifiez les champs en haut du fichier.

## Où mettre les articles

- Les articles en français vont dans `src/content/blog/fr/`, ceux en anglais dans `src/content/blog/en/`.
- Le nom du fichier devient l'adresse : `fr/mon-nas.md` est publié sur `/fr/blog/mon-nas`, et `en/mon-nas.md` sur `/blog/mon-nas`.
- **Donnez le même nom de fichier à une traduction** dans l'autre dossier : les deux versions sont alors reliées, avec un bouton « Lire en… » et le changement de langue dans le menu.
- Un article qui n'existe que dans une langue est quand même listé dans l'autre, avec un petit badge de langue.

## Les champs en haut du fichier

Chaque article commence par un bloc entre deux lignes `---` :

- `title` : le titre de l'article.
- `description` : une ou deux phrases, affichées sous le titre, dans la liste et dans le flux RSS.
- `date` : la date de publication, au format `2026-10-26`.
- `category` : `home-automation`, `macos`, `making-of` ou `dev`.
- `tags` : des mots-clés facultatifs, comme `[nas, docker]`.
- `cover` : une image facultative, comme `./images/ma-couverture.jpg`, avec `coverAlt` pour la décrire.
- `draft: true` garde l'article hors du site tant que vous ne le retirez pas.

## Mise en forme du texte

Les paragraphes sont séparés par une ligne vide. Vous pouvez écrire en **gras**, en *italique*, ajouter [un lien](https://github.com/Aervorn) ou du `code en ligne`.

> Une citation ressemble à ça. Pratique pour citer une documentation ou une note de version.

### Une liste d'étapes

1. Écrire l'article dans `src/content/blog/fr/`.
2. Le vérifier avec `npm run dev`.
3. Retirer `draft: true`, commit et push.

## Du code

```yaml
# configuration.yaml
automation:
  - alias: Lumières éteintes à minuit
    trigger:
      - platform: time
        at: "00:00:00"
    action:
      - service: light.turn_off
        target:
          area_id: salon
```

## Un tableau

| Appareil | Protocole | Pile |
| --- | --- | --- |
| Détecteur de mouvement | Zigbee | CR2032 |
| Thermostat | Thread | AA × 2 |

---

Pour ajouter des images, placez-les dans un dossier à côté de l'article (par exemple `src/content/blog/fr/images/`) et écrivez `![Description](./images/photo.jpg)`. Astro les optimise automatiquement.
