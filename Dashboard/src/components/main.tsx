import type { Member } from "../types/member";
import MembersList from "./memberslist";
import {ActiveMembersList} from "./memberslist";
import FilterBar from "./filterbar";
import { useState } from "react";
import {membersData} from '../dataExsampel.tsx'
/**
 * 
 * 
 */
export default function Main(){

    const [displeyStatus,SetDispleyStatus] = useState<"members-list-section-flex"|"members-list-section-grid">("members-list-section-flex");
    const ToggellDispley = ()=>
        SetDispleyStatus(prev => prev ==="members-list-section-flex" ? "members-list-section-grid":"members-list-section-flex")

      const members: Member[] = membersData
      const [onlyActiveMembers,SetOnlyActiveMembers] = useState(false)
      const OnlyActiveMembers = ()=>
        SetOnlyActiveMembers(prev => prev === true ? false:true)

      return(

        <main className="app__main">
            <div className="filter-bar">
        <FilterBar ToggellDispley={ToggellDispley} ActiveDispley={OnlyActiveMembers}/>
            </div>
        <section className="notice">notice</section>    
        <section className="members-list">{onlyActiveMembers && <MembersList members={members} classNameStatus={displeyStatus}/>}
        :<ActiveMembersList members={members} classNameStatus={displeyStatus}/></section>
        {/* // <MembersList members={members} classNameStatus={displeyStatus}/>} */}
        <section className="tasks-panel">tasks</section>
        </main>
    )
}