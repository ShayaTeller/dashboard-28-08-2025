import type { Member } from "../types/member";
import MemberCard from "./membercard";

type MembersListProps = { members: Member[], classNameStatus:string };

export default function MembersList(
  { members, classNameStatus }: MembersListProps,
) {
  if (!members.length) {
    return <div>empty list of members</div>;
  }
  return (
    <section className={classNameStatus}>
      {members.map((m) => <div className="members-list-item" key={m.id}>   
     <MemberCard id={m.id} name={m.name} role={m.role} active={m.active} />
        </div>)}
    </section>
  );
}

export function ActiveMembersList(  { members, classNameStatus }: MembersListProps,
) {
  if (!members.length) {
    return <div>empty list of members</div>;
  }
  return (
    <section className={classNameStatus}>
     {members.filter((m)=> m.active==true).map((m) => <div className="members-list-item" key={m.id}>   
        <MemberCard id={m.id} name={m.name} role={m.role} active={m.active} /></div>)}
    </section>
  );
}

