import type { Member } from "../types/member";
import MembersList from "./memberslist";
import { ActiveMembersList } from "./memberslist";
import FilterBar from "./filterbar";
import { useState } from "react";
import { membersData } from "../dataExsampel.tsx";
import TaskList from "./tasklist.tsx";
import type { Task } from "../types/task.ts";
import { tasksExample } from "../types/task.ts";

/**
 * Main component - renders the 3 main sections: members, notice, and tasks
 */

// This is the main component of the app that renders the 3 main parts: members/notice/tasks
export default function Main() {
  // This state holds the display status - the CSS class name that toggles between flex and grid layout
  const [displeyStatus, SetDispleyStatus] = useState<
    "members-list-section-flex" | "members-list-section-grid"
  >("members-list-section-flex");

  // This function toggles the display layout between flex and grid - like an on/off switch
  const ToggellDispley = () =>
    SetDispleyStatus((prev) =>
      prev === "members-list-section-flex"
        ? "members-list-section-grid"
        : "members-list-section-flex"
    );

  // Here we declare an array of members using the Member interface
  const members: Member[] = membersData;
  const tasksData: Task[] = tasksExample;

  // This state controls whether to show all members or only active ones
  // By default it shows all members (true = show all, false = show only active)
  const [onlyActiveMembers, SetOnlyActiveMembers] = useState(true);

  const [currentId, SetcurrentId] = useState("");

  const FilterTasksList = () => (id: string) => {
    console.log(currentId)
     return SetcurrentId(id);
  };

  // This method toggles between showing all members and only active members
  const OnlyActiveMembers = () => {
    SetOnlyActiveMembers((prev) => (prev === true ? false : true));
    return true;
  };

  // This return statement renders all the elements that make up this component
  return (
    <main className="app__main">
      <div className="filter-bar">
        <FilterBar
          ToggellDispley={ToggellDispley}
          ActiveDispley={OnlyActiveMembers}
        />
      </div>
      <section className="notice">notice</section>
      <section className="members-list">
        {/* The members display changes based on the onlyActiveMembers state */}
        {onlyActiveMembers && (
          <MembersList
            members={members}
            classNameStatus={displeyStatus}
            tasksShow={FilterTasksList}
          />
        )}
        :
        <ActiveMembersList
          members={members}
          classNameStatus={displeyStatus}
          tasksShow={FilterTasksList}
        />
      </section>
      {/* Here we show the tasks for any member when you click the button on their card */}
      <section className="tasks-panel">
        <TaskList tasks={tasksData} id={currentId} />
      </section>
    </main>
  );
}
