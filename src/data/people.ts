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
        id: "kushal",
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
        id: "prathik",
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
        id: "vishal",
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
        id: "gaurang",
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
        id: "jayesh",
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
        id: "hitansh",
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
        id: "tejas",
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
      {
        id: "principal",
        image: "/BK_Mishra.jpeg",
        name: "Dr. B.K. Mishra",
        position: "Principal | TCET",
        socials: [
          {
            platform: "linkedin",
            link: "https://in.linkedin.com/in/dr-b-k-mishra-9a81131b1"
          },
          
        ],
      },
      {
        id: "viceprincipal",
        image: "/Kamal_Shah.jpeg",
        name: "Dr. Kamal Shah",
        position: "Vice Principal | TCET",
        socials: [
          {
            platform: "linkedin",
            link: "https://in.linkedin.com/in/dr-b-k-mishra-9a81131b1"
          },
          
        ],
      },
      {
        id: "deanict",
        image: "https://media.licdn.com/dms/image/D4D03AQEwEClz0m1T8Q/profile-displayphoto-shrink_400_400/0/1679379252319?e=1693440000&v=beta&t=9P-DiIZhW_6LOuzoOYY0VrxglhI3X6APX77YuRxyGh8",
        name: "Dr. Rahul Kokale",
        position: "Professor | Dean I/C ICT",
        socials: [
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/in/dr-rahul-khokale-97ba46250/"
          },
        ],
      },
      {
        id: "tcetopensource",
        image: "https://avatars.githubusercontent.com/u/115614449?s=200&v=4",
        name: "Volunteers",
        position: "TCET Open Source",
        socials: [
          {
            platform: "twitter",
            link: "https://twitter.com/tcetopensource"
          },
          {
            platform: "linkedin",
            link: "https://www.linkedin.com/company/tcetopensource/"
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