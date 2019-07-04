export interface Child {
    name: string,
    age: number
}
  
export interface Passanger {
    id: number,
    name: string,
    checkIn: boolean,
    checkInDate: number | null,
    children: Child[] | null
}