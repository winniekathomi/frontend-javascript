"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    getRequirements() {
        return '';
    }
    getAvailableTeacher() {
        if (this.teacher) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No teacher available';
    }
}
exports.Subject = Subject;
