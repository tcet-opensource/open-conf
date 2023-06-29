export interface Sponsor {
    title: string;
    sponsors?: string[];
    color: string;
}
const sponsors: Sponsor[]  = [
    {
        title: "Platinum",
        sponsors: [],
        color: "#EFF8FF"
    },
    {
        title: "Gold",
        sponsors: [],
        color: "#FFF6ED"
    },
    {
        title: "Silver",
        sponsors: [],
        color: "#F9FAFB",
    },
    {
        title: "Bronze",
        sponsors: [],
        color: "#FEF3F2"
    },
    {
        title: "In-Kind",
        sponsors: [],
        color: "#ECFDF3"
    }
    
]

export default sponsors