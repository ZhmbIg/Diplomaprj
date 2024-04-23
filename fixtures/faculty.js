import { Faculty } from "../models/index.js"

async function create() {
    return Faculty.upsert(
        {
            id: 1,
            name: 'Прикладная информатика',
      
        })

}
export default {
    create
}