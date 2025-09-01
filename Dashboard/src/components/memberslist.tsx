import type { Member } from "../types/member";
import MemberCard from "./membercard";

// Here I define an interface for the props of this component
type MembersListProps = { members: Member[], classNameStatus: string ,tasksShow:()=>(id:string)=>void};

/**
* This file has 2 components: 
* - One returns all members
* - The second returns only the active members
*/

export default function MembersList(
 { members, classNameStatus , tasksShow }: MembersListProps,
) {
 if (!members.length) { // If the members array is empty
   return <div>Empty list of members</div>;
 }
 
 return ( // Returns all members 
   <section className={classNameStatus}> 
     {/* Create elements with id as key and a member card inside each */}
     {members.map((m,i) => (
       <div className="members-list-item" key={`member-${m.id}index-${i}`}>   
         <MemberCard id={m.id} name={m.name} role={m.role} active={m.active} taskButton={tasksShow}/>
       </div>
     ))}
   </section>
 );
}

export function ActiveMembersList({ members, classNameStatus,tasksShow }: MembersListProps) {
 if (!members.length) {
   return <div>Empty list of members</div>;
 }
 
 // Returns only the active members
 return (
   <section className={classNameStatus}>
     {members
       .filter((m) => m.active === true)
       .map((m,i) => (
         <div className="members-list-item" key={`active-${m.id}index-${i}`}>   
           <MemberCard id={m.id } name={m.name} role={m.role} active={m.active} taskButton={tasksShow} />
         </div>
       ))}
   </section>
 );
}