function* logProgramming() {
  yield 'heml'
  yield 'css'
  yield 'javascript'
}
// access this value;

const myProgrammingLog = logProgramming();

console.log(myProgrammingLog.next()); 


