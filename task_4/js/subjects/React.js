"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = void 0;
// js/subjects/React.ts
const Subject_1 = require("./Subject");
class React extends Subject_1.Subject {
    getRequirements() {
        return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
        if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}
exports.React = React;
