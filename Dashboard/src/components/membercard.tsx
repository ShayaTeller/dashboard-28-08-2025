import type { Member } from "../types/member.ts";

// This component creates a member card that we use in the members list component.
// It takes props of type Member from the Member interface.
export default function MemberCard({ id, name, role, active,taskButton}: Member) {
 // This variable creates the initials for each card/person by taking the first letter of every word in the name
 const initials = name
   .split(" ")
   .map((word) => word[0])
   .join(" ");

 // This function changes the button color based on the role - default is purple
 const buttonColor = (role: string) =>
   role === "Leader" ? "blue" : role === "Member" ? "green" : "purple";

 // This returns the component - a member card filled with properties from the parent
 return (
   <div className="member-card" id={id}>
     <p className="member-card__avatar">{initials}</p>
     <p className="member-card__name">{name}</p>
     <p className="member-card__role">{role}</p>
     {/* This button shows if the member is active or not. If active, 
         clicking it will render the tasks panel and show this member's tasks */}
     <button
       className="member-card-active"
       style={{ background: buttonColor(role) }}
       disabled={!active}
       onClick={() => 
         taskButton()(id)
       }
       
     >
       {active ? "Actions" : "Not Available" /* Shows "Actions" if active, otherwise button is disabled */}{" "}
     </button>
   </div>
 );
}