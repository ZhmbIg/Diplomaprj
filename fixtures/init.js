import faculty from "./faculty.js";
import group from "./group.js";
import student from "./student.js";

async function init() {
   await faculty.create()
   await group.create()
   await student.create()
}

export default {
    init
}