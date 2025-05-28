// task_5/js/subjects/Subject.ts
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export abstract class Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    abstract getRequirements(): string;
    abstract getAvailableTeacher(): string;
  }
}
