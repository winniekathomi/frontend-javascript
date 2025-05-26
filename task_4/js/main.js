"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cpp_1 = require("./subjects/Cpp");
const Java_1 = require("./subjects/Java");
const React_1 = require("./subjects/React");
const cpp = new Cpp_1.Cpp();
const java = new Java_1.Java();
const react = new React_1.React();
const cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
    experienceTeachingJava: 5,
    experienceTeachingReact: 3,
};
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
