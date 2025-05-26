// js/subjects/Subject.ts
import { Teacher } from './Teacher';


export class Subject {
  teacher?: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return '';
  }

  getAvailableTeacher(): string {
    if (this.teacher) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No teacher available';
  }
}




