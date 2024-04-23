import { Group } from "../models/index.js"

async function create() {
    return Group.upsert(
        {
            id: 1,
            name: 'ИДБ-20-09'
        })

}

export default {
    create
}
