export interface Member {
  id: string;
  name: string;
  role: string;
  active?: boolean;
  taskButton:()=>(id:string)=>void
}
