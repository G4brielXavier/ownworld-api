import { prisma } from "../lib/prisma.js";

interface CreateCharDTO {
    name: string,
    short_description?: string,
    description?: string,
    tags: string[],
    relations: string[],
    links: string[]
}

export class CharService {

    async everything() {
        const chars = await prisma.character.findMany();
        return chars
    }

    async findOne(name: string) {
        const exists = await prisma.character.findUnique({ where: { name } });

        if (exists) {
            return exists
        } else {
            throw new Error(`Not found a character called \'${name}\'`)
        }
    }

    async remove(name: string) {
        const exists = await prisma.character.findUnique({ where: { name } })

        if (exists) {
            const removed = await prisma.character.delete({ where: {name} });
            return removed
        } else {
            throw new Error(`Not found a character called \'${name}\'`)
        }
    }

    async create({ name, description, short_description, tags, relations, links }: CreateCharDTO) {
        const exists = await prisma.character.findUnique({ where: { name } });

        if (exists) {
            throw new Error("Already exist a character with the same name.")
        }

        const dataToCreate: any = {
            name: name,
            tags: JSON.stringify(tags),
            relations: JSON.stringify(relations),
            links: JSON.stringify(links)
        }

        if (description) {
            dataToCreate.description = description
        }

        if (short_description) {
            dataToCreate.short_description = short_description
        }

        const char = await prisma.character.create({
            data: dataToCreate
        });

        return char
    }

}