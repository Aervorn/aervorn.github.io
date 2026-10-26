---
title: How to write a post on this blog
description: A template post that shows every formatting option. It's a draft, so it only appears with npm run dev.
date: 2026-10-26
category: making-of
tags: [astro, template]
draft: true
---

This post is a **draft**: it shows up when you run `npm run dev`, but it's never published. Copy it to start a new post, then change the fields at the top of the file.

## Where posts go

- English posts go in `src/content/blog/en/`, French posts in `src/content/blog/fr/`.
- The file name becomes the address: `en/my-nas.md` is published at `/blog/my-nas`, and `fr/my-nas.md` at `/fr/blog/my-nas`.
- **Give a translation the same file name** in the other folder: the two versions are then linked together, with a “Read in…” button and the language switch in the menu.
- A post that only exists in one language is still listed in the other one, with a small language badge.

## The fields at the top

Every post starts with a block between two `---` lines:

- `title`: the title of the post.
- `description`: one or two sentences, shown under the title, in the list and in the RSS feed.
- `date`: the publication date, as `2026-10-26`.
- `category`: one of `home-automation`, `macos`, `making-of` or `dev`.
- `tags`: optional keywords, as `[nas, docker]`.
- `cover`: an optional image, as `./images/my-cover.jpg`, with `coverAlt` to describe it.
- `draft: true` keeps the post off the site until you remove it.

## Text formatting

Paragraphs are separated by an empty line. You can write in **bold**, in *italic*, add [a link](https://github.com/Aervorn), or `inline code`.

> A quote looks like this. Handy to cite documentation or a release note.

### A list of steps

1. Write the post in `src/content/blog/en/`.
2. Check it with `npm run dev`.
3. Remove `draft: true`, commit and push.

## Code

```yaml
# configuration.yaml
automation:
  - alias: Lights off at midnight
    trigger:
      - platform: time
        at: "00:00:00"
    action:
      - service: light.turn_off
        target:
          area_id: living_room
```

## A table

| Device | Protocol | Battery |
| --- | --- | --- |
| Motion sensor | Zigbee | CR2032 |
| Thermostat | Thread | AA × 2 |

---

To add images, put them in a folder next to the post (for example `src/content/blog/en/images/`) and write `![Description](./images/photo.jpg)`. Astro optimizes them automatically.
