// callback hell
// use promises and async/await to avoid

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
}

// task1();
// task2();
// task3();
// task4();
// console.log("All tasks complete");

// All tasks complete
// Task 2 complete
// Task 4 complete
// Task 1 complete
// Task 3 complete

// 加上callback

// callback hell => nesting callbacks

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks complete");
      });
    });
  });
});
