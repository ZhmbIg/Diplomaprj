import { Student } from "./student.js"
import { Discipline, DisciplineType } from "./discipline.js"
import { Faculty } from "./faculty.js"
import { Group } from "./group.js"
import { Professor } from "./Professor.js"
import { Mark } from "./mark.js"

Student.belongsToMany(Discipline, {through: 'StudentDiscipline'})
Discipline.belongsToMany(Student, {through: 'StudentDiscipline'})

export * as default from "./init.js"
export {
    Student,
    Discipline,
    DisciplineType,
    Faculty,
    Group,
    Professor,
    Mark
}