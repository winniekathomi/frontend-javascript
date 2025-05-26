"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpp = void 0;
// js/subjects/Cpp.ts
const Subject_1 = require("./Subject");
class Cpp extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.Cpp = Cpp;
