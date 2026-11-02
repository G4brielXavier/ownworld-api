import { prisma } from '../lib/prisma.js'

interface CreateWorldDTO {
    name: string,
    description?: string
}


export class WorldService {

    async everything() {
        const world = await prisma.world.findMany();
        return world
    }

    async findOne(name: string) {
        const exists = await prisma.world.findUnique({ where: { name } })

        if (exists) {
            return exists
        } else {
            throw new Error(`Not found a world called \'${name}\'`)
        }
    }

    async remove(name: string) {
        const exists = await prisma.world.findUnique({ where: { name } })

        if (exists) {
            const removed = await prisma.world.delete({ where: { name } })
            return removed
        } else {
            throw new Error(`Not found a character called \'${name}\'`)
        }
    }

    async create({ name, description }: CreateWorldDTO) {

        const exists = await prisma.world.findUnique({ where: { name } });

        if (exists) {
            throw new Error("Already exist a world with the same name.")
        }

        const data: any = {
            name: name
        }

        if (description) {
            data.description = description
        }

        const world = await prisma.world.create({
            data: data
        });

        return world

    }

}