var students = [
    {
        lastName: 'Ruiz',
        firstName: 'Juan',
        age: 20
    },
    {
        lastName: 'Gonzalez',
        firstName: 'Eliseo',
        age: 21
    },
    {
        lastName: 'Rivera',
        firstName: 'Maria',
        age: 22
    }
];


    for (var i = 0; i < students.length; i++) {
    console.log('Hello, my name is ' + students[i].firstName + ' ' + students[i].lastName + ' and I am ' + students[i].age + ' years old');
    }