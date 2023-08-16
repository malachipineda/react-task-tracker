import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Moosey's UFC Night",
      "day": "Aug 19th at 8:00pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Sushi's Karate Class",
      "day": "Aug 9th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Llamar's Idaho Vacation",
      "day": "Aug 19th at 10:00am",
      "reminder": true
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
    )}
    </div>
  );
}

export default App;
