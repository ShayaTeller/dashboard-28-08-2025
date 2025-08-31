import type { Member } from "../types/member";
import MembersList from "./memberslist";
import {ActiveMembersList} from "./memberslist";
import FilterBar from "./filterbar";
import { useState } from "react";
import {membersData} from '../dataExsampel.tsx'
import TaskCard from "./taskcard.tsx"
/**
 * 
 * 
 */
export default function Main(){

    const [displeyStatus,SetDispleyStatus] = useState<"members-list-section-flex"|"members-list-section-grid">("members-list-section-flex");
    const ToggellDispley = ()=>
        SetDispleyStatus(prev => prev ==="members-list-section-flex" ? "members-list-section-grid":"members-list-section-flex")

      const members: Member[] = membersData
      const [onlyActiveMembers,SetOnlyActiveMembers] = useState(true)
      const OnlyActiveMembers = ()=>{
        SetOnlyActiveMembers(prev => prev === true ? false:true)
        return true
      }
      return(

        <main className="app__main">
            <div className="filter-bar">
        <FilterBar ToggellDispley={ToggellDispley} ActiveDispley={OnlyActiveMembers}/>
            </div>
        <section className="notice">notice</section>    
        <section className="members-list">{onlyActiveMembers && <MembersList members={members} classNameStatus={displeyStatus}/>}
        :<ActiveMembersList members={members} classNameStatus={displeyStatus}/></section>
        <section className="tasks-panel"><TaskCard id={"5"} title={"test"} assignedTo={"SHaya"} done={false}/></section>
        </main>
    )
}