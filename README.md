# OwnWorld API

*An API created to organize worldbuilding contents as: Characters, Items and Worlds (ambience) and use to document or index.*


## Summary

- [OwnWorld API](#ownworld-api)
  - [Summary](#summary)
  - [Routes](#routes)
    - [Item Routes](#item-routes)
    - [Characters Routes](#characters-routes)
    - [World/Location Routes](#worldlocation-routes)
  - [Models](#models)
    - [Item Model](#item-model)
    - [Character Model](#character-model)
    - [World Model](#world-model)
  - [Stack Used](#stack-used)
  - [Roadmap](#roadmap)


## Routes

### Item Routes

Route used to create and manage specifically items.

| Method | Endpoint | Description | Status |
|  ---   |   ---    |     ---     |  --- |
| `GET`  | `/items/`| List all items created | `200 OK`
| `POST`  | `/items/`| Create a new item | `201 Created`
| `PUT`  | `/items/:name`| Edit an existent item | `200 OK`
| `DELETE`  | `/items/:name`| Delete an existent item | `204 No Content`

### Characters Routes

Route used to create and manage specifically characters.

| Method | Endpoint | Description | Status |
|  ---   |   ---    |     ---     |  --- |
| `GET`  | `/chars/`| List all chars created | `200 OK`
| `POST`  | `/chars/`| Create a new chars | `201 Created`
| `PUT`  | `/chars/:name`| Edit an existent chars | `200 OK`
| `DELETE`  | `/chars/:name`| Delete an existent chars | `204 No Content`

### World/Location Routes

Route used to create and manage specifically locations.

| Method | Endpoint | Description | Status |
|  ---   |   ---    |     ---     |  --- |
| `GET`  | `/worlds/`| List all worlds created | `200 OK`
| `POST`  | `/worlds/`| Create a new worlds | `201 Created`
| `PUT`  | `/worlds/:name`| Edit an existent worlds | `200 OK`
| `DELETE`  | `/worlds/:name`| Delete an existent worlds | `204 No Content`


## Models

### Item Model

```prisma
model Item {
  name          String    @unique
  description   String?
  rarity        String?
  tags          String?   @default("[]")
  links         String?   @default("[]")

  @@map("item")
}
```

```json
// body
{
    "name": "Sword",
    "rarity": "Rare",
    "description": "A basic sword used in important battles."
}
```

### Character Model

```prisma
model Character {
  name              String    @unique
  short_description String?
  description       String?   
  tags              String?   @default("[]")
  relations         String?   @default("[]")
  links             String?   @default("[]")

  @@map("character")
}
```

```json
// body
{
    "name": "Broggy",
    "short_description": "It's broggy",
    "description": "A strongman that protect the Golden Village.",
}
```

### World Model

```prisma
model World {
  name          String    @unique
  description   String?
  tags          String?   @default("[]")
  links         String?   @default("[]")

  @@map("world")
}
```

```json
// body
{
    "name": "Arrakis",
    "type": "Planet",
    "description": "A planet where only have sand and Desert Big Worms."
}
```


## Stack Used

- **TypeScript**
- **Prisma** (with `sqlite`)
- **Zod** for *request-validation*
- **Express** (*back-end*)


## Roadmap

