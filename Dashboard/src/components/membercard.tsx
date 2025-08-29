import type {Member} from '../types/member.ts'
export default function MemberCard({id,name,role,active}:Member){
    const initials = name.split(" ").map(word => word[0]).join(" "); 

    return(
        <div className="member-card">
            <p className="member-card__avatar">{initials}</p>
            <p className="member-card__name">{name}</p>
            <p className="member-card__role">{role}</p>
            <button className="member-card-active" disabled={!active}>{active ? "Actions":"not avelble"}</button>
        </div>
    )
}