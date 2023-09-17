import { useState, useEffect } from 'react';

let data = [
    {
        id: 1,
        name: 'Learn React',
        done: false
    },
    {
        id: 2,
        name: 'Learn JavaScript',
        done: true
    },
    {
        id: 3,
        name: 'Watch a movie',
        done: false
    }
];

export default function CheckList () {

    return (
        <ul className="todo-list">
            {data.map(task => (
                <Task key={task.id} nameProp={task.name} isDoneProp={task.done}/>
            ))}
        </ul>
    )
}

function Task ({ nameProp, isDoneProp}) {
    const [isDone, setIsDone] = useState(isDoneProp);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(nameProp);

    return (
        <li>
            <input type="checkbox" checked={isDone} onClick={() => setIsDone(!isDone)} />
            {isEditing 
                ? <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsEditing(false);
                }}>
                    <input 
                        type="text"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Save</button>
                  </form>
                : <span>{name}</span>
            }
            
            {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
            <button onClick={() => {
                data = data.filter(task => task.name !== name);
            }}>Delete</button>
        </li>
    );
}

// export default function CheckList({
//   tasks,
//   onChangeTask,
//   onDeleteTask
// }) {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>
//           <Task
//             task={task}
//             onChange={onChangeTask}
//             onDelete={onDeleteTask}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({ task, onChange, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         <input
//           value={task.text}
//           onChange={e => {
//             onChange({
//               ...task,
//               text: e.target.value
//             });
//           }} />
//         <button onClick={() => setIsEditing(false)}>
//           Save
//         </button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <button onClick={() => setIsEditing(true)}>
//           Edit
//         </button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={e => {
//           onChange({
//             ...task,
//             done: e.target.checked
//           });
//         }}
//       />
//       {taskContent}
//       <button onClick={() => onDelete(task.id)}>
//         Delete
//       </button>
//     </label>
//   );
// }
