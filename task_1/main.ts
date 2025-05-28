// Task 1: Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2: Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3: printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Task 4: Implementation of printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 5: Test printTeacher
console.log(printTeacher("John", "Doe"));
// Task 6: Interface for class constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for Student methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the class
const student = new StudentClass("Winnie", "Shepherd");
console.log(student.displayName()); // "Winnie"
console.log(student.workOnHomework()); // "Currently working"
// Task 7: Advanced types

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function returning employee
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Tests with type narrowing
const employee1 = createEmployee(200);
if (employee1 instanceof Teacher) {
  console.log(employee1.workTeacherTasks());
}

const employee2 = createEmployee(1000);
if (employee2 instanceof Director) {
  console.log(employee2.workDirectorTasks());
}
// Task 8: String literal types
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Tests
console.log(teachClass('Math'));
console.log(teachClass('History'));

