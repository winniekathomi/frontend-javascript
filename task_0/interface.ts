export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: "Alice",
  lastName: "Mwangi",
  age: 21,
  location: "Nairobi",
};

export const student2: Student = {
  firstName: "John",
  lastName: "Odhiambo",
  age: 23,
  location: "Kisumu",
};

export const studentsList: Student[] = [student1, student2];
