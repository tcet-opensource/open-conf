import type { PEOPLE } from "./people";

export interface ORGANIZER {
  name: string;
  position: string;
  image: string;
  socials?: {
    platform: "linkedin" | "twitter" | "www" | "github";
    link: string;
  }[];
}

const organizers: ORGANIZER[] = [
  {
    image: "/organisers/prathik2.JPG",
    name: "Prathik Shetty",
    position: "AI Lead | Machine Learning developer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/I_am_prathik",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/prathik-shetty15/",
      },
      {
        platform: "github",
        link: "https://github.com/prathikshetty2002",
      },
    ],
  },
  {
    image: "/organisers/vishal2.jpg",
    name: "Vishal Rawat",
    position: "Management Lead | Backend Developer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/vish__rt",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/vish-rt/",
      },
      {
        platform: "github",
        link: "https://github.com/vish-rt",
      },
    ],
  },
  {
    image: "/organisers/Gaurang3.JPG",
    name: "Gaurang Vishwakarma",
    position: "Admin | DevOps/Production Engineer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/demonkillerrr",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/gaurang-vishwakarma/",
      },
      {
        platform: "github",
        link: "https://github.com/demonkillerr",
      },
    ],
  },
  {
    image: "/organisers/Jayesh.jpg",
    name: "Jayesh Potlabattini",
    position: "Web Lead | Full Stack Developer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/jayeshvp24",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/jayeshvp24/",
      },
      {
        platform: "github",
        link: "https://github.com/JayeshVP24",
      },
    ],
  },
  {
    image: "/organisers/hitansh_doshi2.jpg",
    name: "Hitansh Doshi",
    position: "Backend Lead | Full Stack Developer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/hitansh_k",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/hitansh-doshi-b81530197/",
      },
      {
        platform: "github",
        link: "https://github.com/Hitansh159",
      },
    ],
  },
  {
    name: "Kushal Singh",
    position: "UI/UX Lead, TCET Open Source ",
    image: "https://avatars.githubusercontent.com/u/96841144?v=4",
    socials: [
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/kuxshl/",
      },
      {
        platform: "twitter",
        link: "https://twitter.com/kuxshl",
      },
      {
        platform: "github",
        link: "https://github.com/kuxshl",
      },
      
    ],
  },
  {
    name: "Asimvaibhav Tiwari",
    position: "Graphics Member, TCET Open Source ",
    image: "./organisers/asimvaibhav.jpg",
    socials: [
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/asimvaibhav/",
      },
      {
        platform: "twitter",
        link: "https://twitter.com/AsimVaibhav",
      },
      {
        platform: "github",
        link: "https://github.com/asim-vaibhav-435",
      },
    ],
  },
  {
    image: "/organisers/tejas.png",
    name: "Tejas Nair",
    position: "Backend Co-Lead | Software Developer",
    socials: [
      {
        platform: "twitter",
        link: "https://twitter.com/tejasnair9977",
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/tejasnair9977/",
      },
      {
        platform: "github",
        link: "https://www.linkedin.com/in/tejasnair9977/",
      },
    ],
  },
];
export default organizers;
