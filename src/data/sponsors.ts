import { findCompany, type Company } from "./companies";

export interface Sponsor {
    title: string;
    sponsors?: (Company | null)[];
    color: string;
}


const sponsors: Sponsor[]  = [
    {
        title: "Platinum",
        sponsors: [findCompany("FOSS UNITED")],
        color: "#EFF8FF"
    }
]



export default sponsors