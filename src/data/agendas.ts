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
        title: "Registration",
        description: "Check-in, receive badge, and prepare for an engaging day of sessions and networking.",
        labels: ["Hospitality Team"],
        people: [findPerson("tcetopensource")],
    },
    {
        startTime: "10:30 AM",
        endTime: "11:10 AM",
        title: "Opening Ceremony",
        description: "Join us for an inspiring kick-off to the event. Get briefed about engaging with distinguished speakers, gain insights into the event's purpose, and set the tone for a day of learning, connection, and collaboration.",
        labels: ["Thakur Management"],
        people: [findPerson("principal"), findPerson("viceprincipal"), findPerson("tpo"), findPerson("gaurang")],
    },
    {
        startTime: "11:10 AM",
        endTime: "11:30 AM",
        title: "Lightning Talk",
        description: "A quick talk around the theme of OpenConf which is yet to be announced.",
        labels: ["Speakers - TBA"],
    },
    {
        startTime: "11:30 AM",
        endTime: "11:50 AM",
        title: "Open Source Shaping The Future",
        description: "The opening ceremony will be held in the auditorium. The event will be inaugurated by the Principal of TCET, Dr. B. K. Mishra. The event will be hosted by the TCET Open Source.",
        labels: ["TCET Open Source"],
    },
    {
        startTime: "11:50 AM",
        endTime: "1:00 PM",
        title: "Keynote",
        description: "Immerse yourself in a captivating display of diverse projects. Our keynote speakers will unveil groundbreaking initiatives, sharing their expertise, innovation, and development stories.",
        labels: ["TCET Open Source"],
        people: [findPerson("gaurang"), findPerson("hitansh"), findPerson("jayesh"), findPerson("vishal"), findPerson("prathik"), findPerson("kushal")],
    },
    {
        startTime: "1:00 PM",
        endTime: "2:00 PM",
        title: "Lunch and Networking",
        description: "Refuel and recharge during our delicious catered lunch. Connect with fellow attendees, exchange ideas, and forge valuable connections.",
        labels: ["Break"],
        people: [findPerson("tcetopensource")],
    },
    {
        startTime: "2:00 PM",
        endTime: "2:20 PM",
        title: "Ice Breakers",
        description: "Get ready to break the ice and foster connections. Engage in interactive activities designed to spark conversation, promote networking, and create a friendly atmosphere.",
        labels: ["All Participants"],
    },
    {
        startTime: "2:20 PM",
        endTime: "4:00 PM",
        title: "Lightning Talks",
        description: "Multiple quick talks around the theme of OpenConf which are yet to be announced.",
        labels: ["Speakers - TBA"],
    },
    {
        startTime: "4:00 PM",
        endTime: "4:45 PM",
        title: "Panel Discussion",
        description: "Hear from top industry experts as they share insights, discuss trends, and answer your questions. Gain valuable perspectives and expand your knowledge in this engaging and informative panel discussion.",
        labels: ["Speakers - TBA"],
    },
    {
        startTime: "4:45 PM",
        endTime: "5:00 PM",
        title: "Closing Ceremony",
        description: "Conclude the event on a high note. Reflect, celebrate achievements, and bid farewell with renewed inspiration and actionable takeaways for your future endeavors.",
        labels: ["Thakur Management"],
        people: [findPerson("tcetopensource")],
    },
]

export default agendas