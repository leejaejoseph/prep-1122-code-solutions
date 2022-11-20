var person = {
  firstName: 'Joseph',
  lastName: 'Lee',
  hobby: 'Video Games'
};

console.log(person);

var fullName = person.firstName.concat(' ', person.lastName);

console.log(fullName, 'forgot to save his work and is working on the project again.');

person.job = 'funemployed';
console.log(fullName, 's current job is', person.job);

person.previousJob = 'CPA accountant';
console.log(fullName, 'worked as a', person.previousJob, 'and it sucked');

console.log(person);
