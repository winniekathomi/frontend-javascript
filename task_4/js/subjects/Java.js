"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Java = void 0;
// js/subjects/Java.ts
const Subject_1 = require("./Subject");
class Java extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.Java = Java;
