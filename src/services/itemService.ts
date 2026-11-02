import { prisma } from '../lib/prisma.js'

interface CreateItemDTO {
    name: string,
    description?: string
}

export class ItemService {
    async create ({ name }: CreateItemDTO) {
        const itemExists = await prisma.item.findUnique({ where: { name } })
    
        if (itemExists) {
            throw new Error("Already exist an item with the same name.")
        }

        const item = await prisma.item.create({
            data: { name }
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