
// const taskTitles = [];
// const taskComplete = [];

// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
