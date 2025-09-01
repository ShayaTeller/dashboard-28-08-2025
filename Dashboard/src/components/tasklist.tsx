import type { Task } from "../types/task";
import TaskCard from "./taskcard";

export default function TaskList({ tasks, id}:{tasks:Task[],id:string }) {
  if (!tasks.length) return <div id="no-tasks-show">no tasks</div>;

  return (
    <>
      {tasks.map((task: Task) => {
        if(task.assignedTo==id)
        return (
          <div key={task.id}>
            <TaskCard id={task.id} title={task.title} done={task.done} assignedTo={task.assignedTo} />
          </div>
        );
      })}
    </>
  );
}
