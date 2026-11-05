import { prisma } from '../lib/prisma.js'

interface CreateItemDTO {
    name: string,
    description?: string,
    rarity?: string,
    tags: string[],
    links: string[]
}

export class ItemService {
    async create ({ name, description, rarity, tags, links }: CreateItemDTO) {
        const itemExists = await prisma.item.findUnique({ where: { name } })
    
        if (itemExists) {
            throw new Error("Already exist an item with the same name.")
        }

        const data: any = {
            name: name,
            tags: JSON.stringify(tags),
            links: JSON.stringify(links)
        }

        if (description) {
            data.description = description
        }

        if (rarity) {
            data.rarity = rarity
        }

        const item = await prisma.item.create({
            data: data
        });

        return item
    }

    async everything () {
        const items = await prisma.item.findMany();
        return items
    }

    async findOne(name: string) {
        const itemExists = await prisma.item.findUnique({ where: { name }});

        if (itemExists) {
            return itemExists
        } else {
            throw new Error(`Not found an item called \`${name}\``)
        }
    } 

    async remove(name: string) {
        const itemExists = await prisma.item.findUnique({ where: { name } });

        if (itemExists) {
            const itemDeleted = await prisma.item.delete({ where: { name } });
            return itemDeleted
        } else {
            throw new Error(`Not found an item called \`${name}\``)
        }
    }
}