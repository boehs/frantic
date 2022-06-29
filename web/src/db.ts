import knex from "../../db/knex"

export async function getAllCollections() {
    knex('collection').select().then(collections => {
        console.log(collections)
        return collections || []
    })
}