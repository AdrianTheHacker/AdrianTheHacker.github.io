var app = document.getElementById('animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

const educationString = 'UWaterloo EE Class of 2029⚡';
const futureJob  = 'Aspiring Controls Systems Engineer🤖';
const programmingLanguages = 'Experienced in C++, Python, Java🧑‍💻'
const hobby = 'Avid Snowboarder🏂';

const startTime = 250;
const fullTime = 300;
const emptyTime = 250;

typewriter
  .pauseFor(startTime)
  .typeString(educationString)
  .pauseFor(fullTime * 3)
  .deleteChars(educationString.length)
  .pauseFor(emptyTime)

  .typeString(futureJob)
  .pauseFor(fullTime * 3)
  .deleteChars(futureJob.length)
  .pauseFor(emptyTime)
  
  .typeString(programmingLanguages)
  .pauseFor(fullTime * 3)
  .deleteChars(programmingLanguages.length)
  .pauseFor(emptyTime)

  .typeString(hobby)
  .pauseFor(fullTime * 3)
  .deleteChars(hobby.length)
  .pauseFor(emptyTime)

  .start();