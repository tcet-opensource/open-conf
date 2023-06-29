export interface PEOPLE {
    name: string,
    position: string,
    image: string,
    id: string,
    socials?: {
        platform: "linkedin" | "twitter" | "www",
        link: string,
    }[]
}

const people: PEOPLE[] = [
    {
        id: "1",
        name: "Kushal Singh",
        position: "UI/UX Lead, TCET Open Source ",
        image: "https://avatars.githubusercontent.com/u/96841144?v=4",
        socials: [
            {
                platform: "linkedin",
                link: "https://www.linkedin.com/in/kuxshl/"
            },
            {
                platform: "twitter",
                link: "https://twitter.com/kuxshl"
            }
        ]
    },
    {   
        id: "2",
        image: "/organisers/prathik2.JPG",
        name: "Prathik Shetty",
        position: "AI Lead | Machine Learning developer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/I_am_prathik"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/prathik-shetty15/"
          }
        ],
      },
      {
        id: "3",
        image: "/organisers/vishal2.jpg",
        name: "Vishal Rawat",
        position: "Management Lead | Backend Developer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/vish__rt"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/vish-rt/"
          }
        ],
      },
      {
        id: "4",
        image: "/organisers/Gaurang3.JPG",
        name: "Gaurang Vishwakarma",
        position: "Admin | DevOps/Production Engineer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/demonkillerrr"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/gaurang-vishwakarma/"
          }
        ],
      },
      {
        id: "5",
        image: "/organisers/Jayesh.jpg",
        name: "Jayesh Potlabattini",
        position: "Web Lead | Full Stack Developer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/jayeshvp24"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/jayeshvp24/"
          },
        ],
      },
      {
        id: "6",
        image: "/organisers/hitansh_doshi2.jpg",
        name: "Hitansh Doshi",
        position: "Backend Lead | Full Stack Developer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/hitansh_k"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/hitansh-doshi-b81530197/"
          },      
        ],
      },
      {
        id: "7",
        image: "/organisers/tejas.png",
        name: "Tejas Nair",
        position: "Backend Co-Lead | Software Developer",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/tejasnair9977"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/tejasnair9977/"
          },
          
        ],
      },
]


export const findPerson = (id: string) => {
    const person = people.find((person) => person.id === id)
    if(!person) return null
    else return person
}

export default people