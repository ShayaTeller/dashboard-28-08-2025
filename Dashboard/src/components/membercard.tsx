import { useState } from 'react';
import type {Member} from '../types/member.ts'
export default function MemberCard({id,name,role,active}:Member){
    const initials = name.split(" ").map(word => word[0]).join(" "); 
const [buttonColor,SetButtonColor] = useState("purple")
// {if (role==="Leader"){
//     SetButtonColor("blue")
// }}
// if(role=="Member"){
//    SetButtonColor("green") 
// }}

    return(
        <div className="member-card">
            <p className="member-card__avatar">{initials}</p>
            <p className="member-card__name">{name}</p>
            <p className="member-card__role">{role}</p>
            <button className="member-card-active" style={{background:buttonColor}} disabled={!active}>{active ? "Actions":"not avelble"} </button>
        </div>
    )
}

