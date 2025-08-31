 import type { Task } from "../types/task"; 

 export default function TaskCard({id,title,done,assignedTo}:Task){ 
     return(
         <div className="member-card">
            <p className="taskId">{id}</p>
             <p className="member-card__name">{title}</p>
             <p className="member-card__role">{assignedTo}</p>
             <p className="member-card__role">{done}</p>
         </div>
     )
 }