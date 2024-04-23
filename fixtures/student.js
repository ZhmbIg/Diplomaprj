import { Student } from "../models/student.js";

 async function create() {
    return Student.upsert(
        {
            id: 120229,
            password: '123123',
            name: 'Zalupish',
            surname: 'Шахмурзаев',
            group_id: 1,
            email: 'rend228@yandex.ru',
            phone_number: '+7-938-082-89-89',
            faculty_id: 1,
        })

}

export default {
    create
}