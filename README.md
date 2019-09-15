Todos Test Assignment for UpLab Bootcamp 2019
## Overview
Welcome to the UpLab Bootcamp 2019. This is the test assignment for you to get your brains prepared before the course. The number of places is limited, so the purpose of this test assignment is to choose the best candidates that are able to understand and complete tasks of different complexity.

The test assignment is a simple todo list application that allows you to create your own list that is saved in your browser memory. 
The application is supposed to perform the following actions:
- add a new task
- set a due date for a task
- see a list of todos
- mark todo as completed
- remove todos
- see all the todos along with completed

### Structure of the assignment
In the daily life, programmers should fix bugs before adding features. Who is willing to use an application full of bugs, but with tons of features? That's why it is mandatory to complete all the bugs from the list.

Tasks list is a list of new features that should be added to the working application. It should allow you to choose an order, pick only the features that you can implement.
__Please take a note that different tasks have different number of points__.

__Important__: partial task solution doesn't count. Solutions with bugs doesn't count - test your code.

## How to work on your assignment

1. Create a __private__ mirror of this repo in your GitHub account to avoid exposing your code and invite `brmk` as a collaborator (Settings -> Collaborators). You can learn how to do it here: https://help.github.com/articles/duplicating-a-repository/
2. Setup your environment (please see Environment section for versions in the end of this file)
3. Install npm dependencies with command `npm i` or `yarn`
4. Start the app `npm run start` or `yarn start`
5. Please try to have 1 commit per task/bugfix. When you complete your task, do not forget to mark it as completed in the list below. Just put an `x` into the checkbox between braces ( `- [ ]` - unchecked, `- [x]` - checked ).
6. Do not forget to constantly push your changes.
7. When you finish your assignment, please send an email to hi@uplab.io with the link to your GitHub repo and a list of finished tasks.

We only accept your assignments in the GitHub. Do not send us any zip archives with your projects!

__Have a question?__ Please, do not hesitate to contact us at https://fb.me/uplab.life, https://instagr.am/uplab.life or by email hi@uplab.io

## Assignment

### Bugs (mandatory):

- [ ] B1. Fix the app crash when adding a new item to the to do list

### Tasks (optional):

- [ ] T1. Change a favicon of the app into something cool. __1 point__
- [ ] T2. Integrate a https://www.npmjs.com/package/react-confirm-alert and ask a user his confirmation before deleting the todo item (note: deleting is not completing!) __4 points__
- [ ] T3. In the todo list header you can see a cog icon with the dropdown options (currently it has "Show open" and "Show all" buttons). Add a new option that will mark all todos as completed. __5 points__
- [ ] T4. In the todo list header you can see a cog icon with the dropdown options (currently it has "Show open" and "Show all" buttons). Add a new option that will show closed tasks. __3 points__
- [ ] T5. Highlight due dates in the todo list with different colors. __4 points__ Requirements:
* Green - the task's due date is 2+ days from today or the task is already completed.
* Yellow - the task's due date is <2 days from today or today
* Red - the task's due date has already passed
- [ ] T6. Reorder todos in the list with drag'n'drop __10 points__ Links:
* https://github.com/atlassian/react-beautiful-dnd
* https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
- [ ] T7. Deploy your demo app to any server/service __4 points__ Links:
* There are many options here https://create-react-app.dev/docs/deployment#zeit-now-https-zeitco
* http://netlify.com
* https://zeit.co/

__Note:__ you can do some extra stuff if you want. Please write about it somewhere and we will add extra points to your application!

-----

## Handy links that might help you

0. JS fundamentals - https://www.codecademy.com/learn/introduction-to-javascript
1. Intro to React - https://reactjs.org/tutorial/tutorial.html
2. ES6 - https://medium.freecodecamp.org/want-to-learn-es6-take-this-free-23-part-course-and-become-a-javascript-ninja-55002db1ff74
3. How to Learn React — A roadmap from beginner to advanced - https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6

--- 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment

- Node.js v9.10.0 (nvm)
- npm - 5.6.0
- you can use `yarn` instead of npm - 1.2.1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
