var picoTheAlien = {
  color: 'blue',
  age: 12,
  friends: ['bob', 'gobo', 'tommy'],
  'political affiliation': 'independent'
};

picoTheAlien.'age'

function randomInteger(limit) {
  return Math.floor(Math.random() * limit);
}

var magicStick = {
  students: ['Mo', 'Kristen', 'Rachel', 'Christa', 'Tim', 'Chris', 'Matt', 'Jon', 'Jeremy', 'Z', 'Patti', 'Ariadna', 'Ben', 'Nicole', 'Tanner', 'SK'],
  adjectives: ['pretty', 'smart', 'funny', 'smelly', 'short', 'ugly'],

  select: function() {
    var listLength = this.students.length;
    var indexValue = randomInteger(listLength);

    return this.students[ indexValue ];
  },

  insult: function() {
    var student = this.select();
    var insult = this.adjectives[randomInteger(6)];

    return "next volunteer: " + insult + " " + student;
  }
};

console.log(magicStick.insult());
