import type { PEOPLE } from "./people";
import {findPerson} from "./people";
export interface AGENDA {
    startTime: string,
    endTime: string,
    title: string,
    description?: string,
    labels: string[],
    people?: (PEOPLE | null)[],
}

const agendas: AGENDA[] = [
    {
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        title: "Opening Ceremony",
        description: "The opening ceremony will be held in the auditorium. The event will be inaugurated by the Principal of TCET, Dr. B. K. Mishra. The event will be hosted by the TCET Open Source.",
        labels: ["pre-event"],
        people: [findPerson("1"), findPerson("1"), findPerson("1"), findPerson("1")],
    },
    {
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        title: "Opening Ceremony",
        description: "The opening ceremony will be held in the auditorium. The event will be inaugurated by the Principal of TCET, Dr. B. K. Mishra. The event will be hosted by the TCET Open Source.",
        labels: ["pre-event"],
        people: [findPerson("1"), findPerson("1"), findPerson("1"), findPerson("1")],
    },
    {
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        title: "Opening Ceremony",
        description: "The opening ceremony will be held in the auditorium. The event will be inaugurated by the Principal of TCET, Dr. B. K. Mishra. The event will be hosted by the TCET Open Source.",
        labels: ["pre-event"],
        people: [findPerson("1"), findPerson("1"), findPerson("1"), findPerson("1")],
    },
]

export default agendas