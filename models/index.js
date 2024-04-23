import { Student } from "./student.js"
import { Discipline, DisciplineType } from "./discipline.js"
import { Faculty } from "./faculty.js"
import { Group } from "./group.js"
import { Professor } from "./Professor.js"
import { Mark, MarkType } from "./mark.js"
import { Class } from "./class.js"


DisciplineType.hasMany(Class, {
    foreignKey: 'class_type_id'
})
Class.belongsTo(DisciplineType)

MarkType.hasMany(Mark, {
    foreignKey: 'type_id',
})
Mark.belongsTo(MarkType)

Student.hasMany(Mark, {
    foreignKey: 'student_id',
})
Mark.belongsTo(Student)

Group.hasMany(Student, {
    foreignKey: 'group_id'
})
Student.belongsTo(Group)

Faculty.hasMany(Student, {
    foreignKey: 'faculty_id',
})
Student.belongsTo(Faculty)

Discipline.hasMany(Class, {
    foreignKey: 'discipline_id'
})
Class.belongsTo(Discipline)

Professor.hasMany(Class, {
    foreignKey: 'professor_id'
})
Class.belongsTo(Professor)

Discipline.belongsToMany(Professor, { through: 'discipline_professor' })
Professor.belongsToMany(Discipline, { through: 'discipline_professor' })

Student.belongsToMany(Discipline, { through: 'student_discipline' })
Discipline.belongsToMany(Student, { through: 'student_discipline' })

export * as default from "./init.js"
export {
    Student,
    Discipline,
    DisciplineType,
    Faculty,
    Group,
    Professor,
    Mark,
    Class
}