const { PrismaClient } = require("./generated/prisma")

const databaseUrl = process.env.NODE_ENV === 'test' ?
                process.env.TEST_DATABASE_URL :
                process.env.PROD_DATABASE_URL;

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl
        }
    },
});

async function newCar(brand, model, year) {
    await prisma.cars.create({
        data: {
            brand: brand,
            model: model,
            year: year
        }
    })
}

async function findAllCars() {
    return await prisma.cars.findMany()
}

async function deleteAllCars() {
    return await prisma.cars.deleteMany()
}

module.exports = { newCar, findAllCars }
