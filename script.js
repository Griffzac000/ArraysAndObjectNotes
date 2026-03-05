// ── Intercept console.log to show output in panel ──
const output = document.getElementById('output');
const _log = console.log;
console.log = function (...args) {
    _log(...args);
    const line = document.createElement('div');
    line.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
    output.insertBefore(line, output.querySelector('.render-zone'));
};

// ═══════════════════════════════════════════
// WARM-UP: Loops Review (TODOs 1–2)
// ═══════════════════════════════════════════
console.log('── Warm-Up ──');

// TODO 1: Write a for loop that counts from 1 to 5
// YOUR CODE HERE
for ( let i = 0; i < 5; i++ ) {
    console.log(i);
}

const fruits = ['apple', 'banana', 'cherry'];
// TODO 2: for...of loop — log each fruit
// YOUR CODE HERE
fruits.forEach(f => console.log(f));


// ═══════════════════════════════════════════
// SECTION 1: Array Basics (TODOs 3–5)
// ═══════════════════════════════════════════
console.log('── Section 1: Array Basics ──');

// TODO 3: Declare an array of 3 colors
const colors = ['red', 'green', 'blue'];

// TODO 4: Log the first color (index 0)
console.log([0]);

// TODO 5: Log the array's length
console.log(colors.length);



// ═══════════════════════════════════════════
// SECTION 2: Mutating Arrays (TODOs 6–8)
// ═══════════════════════════════════════════
console.log('── Section 2: Mutating Arrays ──');

const nums = [10, 20, 30];

// TODO 6: Add 40 to the end using push
// YOUR CODE HERE
nums.push(40)


// TODO 7: Remove the last item using pop — store in removed
const removed = nums.pop();
console.log('Removed:', removed);

// TODO 8: Remove the first item using shift — store in first
const first = nums.shift();
console.log('First was:', first);


// ═══════════════════════════════════════════
// SECTION 3: Array Methods (TODOs 9–11)
// ═══════════════════════════════════════════
console.log('── Section 3: forEach / map / filter ──');

const scores = [88, 72, 95, 61, 83];

// TODO 9: forEach — log each score
scores.forEach(s => console.log(s));

// TODO 10: map — each score + 5 bonus points
const boosted = scores.map(s => s + 5);
console.log('Boosted:', boosted);

// TODO 11: filter — only scores >= 80
const passing = scores.filter(s => s >= 80);
console.log('Passing:', passing);


// ═══════════════════════════════════════════
// SECTION 4: Objects (TODOs 12–14)
// ═══════════════════════════════════════════
console.log('── Section 4: Objects ──');

// TODO 12: Create a student object with name, grade, isEnrolled
const student = {
    name: "Eliza",
    grade: 85,
    isEnrolled: true
}

// TODO 13: Log the student's name using dot notation
console.log(student.name);

// TODO 14: Add a 'school' property
// YOUR CODE HERE
student.school = "Walker Career Center"

console.log(student);


// ═══════════════════════════════════════════
// SECTION 5: Arrays of Objects (TODOs 15–16)
// ═══════════════════════════════════════════
console.log('── Section 5: Arrays of Objects ──');

const students = [
    {name: 'Aaliyah', grade: 92, club: 'Robotics'},
    {name: 'Marcus', grade: 78, club: 'Chess'},
    {name: 'Priya', grade: 95, club: 'Robotics'},
    {name: 'Devon', grade: 85, club: 'Art'},
];

// TODO 15: forEach — log each student's name and grade
students.forEach(s => {
    console.log(s.name)
    console.log(s.grade);
});

// TODO 16: filter — only Robotics club students
const robotics = students.filter(s => s.club !== 'Robotics');
console.log('Robotics:', robotics);


