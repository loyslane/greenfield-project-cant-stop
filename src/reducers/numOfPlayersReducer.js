// export default (numOfPlayers, action) => {
//   switch (action.type) {
//     default:
//       return numOfPlayers;
//   }
// };

// function numOfPlayers (state, action) {
//   if (action.type === 'PLAYERS2') {
    
//   } else if (action.type === 'PLAYERS3') {

//   } else {

//   }
// }

// // e.g.
// // function counter (state, action) {
// //   if (typeof state === 'undefined') {
// //     return 0 // initial state
// //   }
// const counter = (state = 0  /*es6 convention of setting default through input*/, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
//   // changed to switch statement in counter function
//   // if (action.type === 'INCREMENT') {
//   //   return state + 1;
//   // } else if (action.type === 'DECREMENT') {
//   //   return state - 1;
//   // } else {
//   //   return state;
//   // }
// }

// e.g.
// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       };
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state;
//       }
//       reutrn {
//         ...state,
//         completed: !state.completed
//       };
//     default:
//       return state;
//   }
// };
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ];
//     case 'TOGGLE_TODO':
//       return state.map(t => todo(t, action));
//     default:
//       return state;
//   }
// };
// // separated actions 
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'Add_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ];
//     case 'TOGGLE_TODO':
//       return state.map(todo => {
//         if (todo.id !== action.id) {
//           return todo;
//         }
//         return {
//           ...todo,
//           completed: !todo.completed
//         };
//       });
//     default:
//       return state;
//   }
// };
