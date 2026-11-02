import { prisma } from "../lib/prisma.js";

interface CreateCharDTO {
    name: string,
    description?: string,
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

    async create({ name, description }: CreateCharDTO) {
        const exists = await prisma.character.findUnique({ where: { name } });

        if (exists) {
            throw new Error("Already exist a character with the same name.")
        }

        const dataToCreate: any = {
            name: name
        }

        if (description) {
            dataToCreate.description = description
        }

        const char = await prisma.character.create({
            data: dataToCreate
        });

        return char
    }

}