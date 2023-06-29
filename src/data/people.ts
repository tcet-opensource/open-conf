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
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGRgaGhkcHBwaGhocGhwhGhwZHBwaHBoeIS4lHB4rIRwcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ1MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAP8AxgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAMFAQIGBwj/xAA/EAABAwIDBQUHAgUDAwUAAAABAAIRAyEEEjEFQVFhcQYigZGhEzKxwdHh8EJiBxQjUpKCovEzcsIVFrLS4v/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBgX/xAAlEQADAQABBAMAAgMBAAAAAAAAAQIRAxIhMUEEIlETcRQjYQX/2gAMAwEAAhEDEQA/AKFCELA3BCEIAQhCAEIQgBCEIAQVpVqtb7xAVdicUXzFgBobTz9QrTLZFUkWLq7Rq4eajdimgxfwE856KjFUDSJ5o/mvdnMAJBOgnw8rq/QinWzoRVb/AHDwMrZc9UqEaEQB1HwUlLG5Blzd6eZA+yhwFZeoUOFxAeLajVTKjWGieghCFABCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAWHugSdAsqt2rWIGUGBYnxnepS1hvEJY+s4vk6DTz3+iWFYGIkjfMi/AcVC95N+kmb20HFX2yNi+1ZJBGaCNTay0qlC1mcxV1iKnD0yXWbJ05fe6sqXZysWyGOLSPnK9G2JsBjQDkFrR9V2WHwbcug8lkuV0+yOh8ClfZnz7jtm1mXLSRaRHC8HjdVhLYzAXESPnPl5r6B2xs5jhGUc15nt3shGZ7DfWOPirLlSeUUrg1bJyoxUtd+kGDY6xoFc4DGNc1oLhm068PRc2CWOhzYIkEEeHgn9k1W52Ng8p3WMLSkmjGW0zokIQsTUEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBK7UaDTMjSCTF4E+kxKaS+0KWek8AXgeHeEnylSvIfg5vBNDnsBbJLgLcyvWdn4QNay0QALBed9ksHNXO4WEx4QDfx9V6JT2qynAyOeeUQOu+eUKnNtNSjX4+SnTOiwVNw3KyL3Qfv8QqLB9rMO52Uksdwc2PirtmKY4SHWVFPSauuoRxdUwdef09CqLFv1C6etkcCJF+Y6Khx+EDdDbiqUi8tHlHazCltUPiGuN+u+y02HSBe5xE5QIPN32HgrPty+XNYP0x8El2fYAH+A5Wk6+K65f0OG0v5GW6EIVCQQhCAEIQgBCEIDKEIUgEIQgBCEIAQhCAFc4XB5qE6A5p53OvQAR15qmXQbDaX0ajL2JgD9zfq1Uvwa8TXV3KvYmFawOytEuc7SYgH8+6MRs6qXljnlrL3bx3E8ldYGiA8QLDQXjeuqw+Ba9ozNg8QbrN19tNulKcPLqOyKzWZzUl+YANEkZWtguOYak3HXdoOzoYSozBGqXEOAJLY1jcryvgqbCAAXOM21MfBb7Rc3+WbrBdcKarqZErpSz2eV4/G1wM7y9rMzmzniSGucQBOsNMcZHFM4DaRJEPfoO6/gd4m5HXiuqx2w89MFgBY6JaRmE7jfTqqWrsB7X532gRuFhEADgFfZzCvRXVpyXad5dVvwb6k/FPYDChjAAL7+qnNDNiQ6PdAIsSARxI371PiWw8gRru05q/UsUowqHrp/pEhCEIBCEIAQhCAEIQgBCyhAYQsoQGELKEBhaueBvSrq7nvyNG+Cuj2ZsZkS8j8hXU/pm7/Cl9qOB8pVxsPaLKIeXscWOy9QW5ot4q5p7Ooi1vJSuwlEf2+is+OWsInlqXotsyqHQ7iAfO/zXUYXEgAXXD42uynUysNoBHKZBHp6pzEbScKQdTcM+gm/jdclTlYd811Tpd9pW1gz2mGcQ5oJdIvFtx4XtC5XD7fxj306bWguJuSQLiTljcSB6jitcM/E1w5lTE5ZmBBgnhnu4Ld7a+HLXipSc4E5WtzESQQdw3eS1UyU/wBrWna4XMxoa6LieETrZU203+8LxBSux9s1arHB7MsOzDlb3Ry+MrTHYoXG8259FjS+2I1ltzrKh7hTDnD3nEAeDQFXPqal08yea63+VZlAdlJHCY3ST4quxmDpkEgBdUcSzv5OHk5m3i8Io2uB0MrKSxZyOlp/OaaoVQ9uYf8AHJRU4JrTdCyhVLGELKEBhCyhAbIWUKAYQsoQGErja2UWMfZNrntvVYcBxHzKtK1laeIZ2VXDb71ejaZIgFcXhqjj7oJ6aeas2Z95jpr56LYxL52NffvflkhitqFk96TuHzN0m4mDf85qtrmCpBb0GvNJtR5kvc9wM37rshnxb8FbdncUM+UnXSbx0TGycIK2zQ5oGeg+oeJIeczrbrOB/wBJ4rn3sLTIssOSe+P2dXFXZNejvq/Z41W52VA12hGgPlooG9mqje9UeCBznwXM4TbtVmjp6lT1e0tRwud2iy6a8HR1ryWe0cYKVm2JEFcttna72Op5AQHEuDjecpvHOQsue+o8XlziAOpgAAdVZdttnNp0sKz9Tc9+Nml5/wAsq14+L2/Rzc3K2sXsrHbbfvcY6rJ2o4jVVDAN+ixVY5onUcfrwW5zDGKxRKm2Hipe5m4iR1Gvp8FTVHyt9m1stVh/cB52Va7otLxnZIWQhYGxhELKEBiELKEBmELMLMIDVC2hI7UflYI3kel1KWsN4iWtiALa9FWYimx7szmgnnMeWhUpfJHMLY01spSMapsiaz8+ymyQth0WBqrFRLFPNuCTqUySmsYx7XWGZrj4t+oUlNnCdFAOm/hjjgys+idKjQQDpmpydOJaXf4hM9rNgewcXsE0XGbfoJOn/bOnCwXJ7MxRoV2VB+h4cRxANxodRIXueNZSfRcXlpplkkujLlI1JNtD6qXKqcZaac1qPEyzgQVC+AQLknQAGSeAA16K1xGwnuc/+Ve19MGweXZ28jDTAjQuIPG66vs12UbSh73B7yBcXaBwbynfvWU8Tbxm1cqS7EHZXs+WRVqDvn3W65Bz/eR5aDfPM9v8RnxRYB/02Nb1LhnMeBb+Bestphgk2AE+V14bj8Qa1Z9Q/re53gTYeAgLpaUziObqdPWLU2WTlNnnC1YyNVmk/Me6LbydPDiVmSL4nANcZByn08Ru8Eg/AVGEOiQIMtM6HhquiLOX5CjLITAWjVmElSxZHvX+KcZUa64KwqWjeaTMoW0IhVJNYQtoQgMwiFusQgNSFRbbxPfDRuBnxV+uexTQ57yCDM+ivC7lbfY2ov7jXHcY87fFPBshVtAyxzeR9LqwwNTMwHX85rUxJGs+SXrWM802+10PZnGl+qkCbhm009FqKcaLFPuPg6OPkeHz6ymC1QSIYhqtcdt2pVw1HDOJZRpgB2X3nlp7kzbK0ACL3k7hCVenZO9nMO2o80nfra6NdWjNwtbNw3ckzexM100m1o2aBfSyPfUc0EZW58rItILGgZr7nTpbeFc7A23/ACTqdKsIw9QgNMj+kTN7TDSRcH3dbXVdsdwyu9qXOc1rmjRsuZ3QTIPD7rbZ+xXYh4zDuMGaDxcO7HKCf8lzcbt2lp9/5XHwT8Z0pS3H49v8O07d4wU8G8T3qgyCN+cHNFv7Q4rx+iySuh7V4l/cw7jLac5Tvh24nWwFuTuipKIXXX4edSNiyYHNT0m205Rwhaez70jlMzcaLcNk5YtqfooJJXNUeXwTKgcJJQCzwtaVSHa6X+iYqtSYNif7j6CyAvaNQPaHDf8AHQ+q2hQbOH9Nt51+JsmoXO/J0LwRwhbwhQDeFmFtCIQsLY73HXvB9QuKqUnsMgkj8ldZtrGNY0NOrj5DiVWUXNeJFx8FrC7GNvuIbPxYLhP5KsdluIZE6GPK3yVXj8FlOdm7UJjZOKl5BOseB0VyhdvuJlR0MQAfH7LZ7TFlX1JCAtalFrwfyI3g8REqKnOjveHDeNx/Oar6OKypl+NBGkEb/khBO9nn+b1Fga5pVWPF8rgY4wfos064cAQdekqHEPBKEnQYt5ear2Fzml1Qi4gMD3Hug6AybeGpg3HYjFkMfSeA1/vZiCO4IJzToW2G60WsSuewsOpNDWm2YnfxJPIRCjw2IigDDgS1zJFuLXi4MjKTpBBi+oPNFNcj/s9Dz8cX8Rd/C1L8YjtTE+1qvfpmcSOMGA0G/wDaGjwWtNlgo9T4pumPIarq086aNG8+CYw9LKDOpuVAKrZ1EDnv+g+PRYrYsaA6ICZ7uC0YlHViTZMs0vIP31QEONdaBqTA8UniSBAGgEeSlrPmoBuaCeh3fPySz7mdUBebFJNLdZxGt9x03C58in4VZ2eiHDf3fQu+quMqwpdzaX2IoKFLlWVXC2giFuGLTEPyMc7XK0mOglQWOZ21imirlIG4SeZjVVZxPsj7pbN5Blp5jgncU9r3FxGvJL4fDOaYa4OZ/aSPSbrdLEc9PWNYbaLH2Jv+ahKYvDhj2vbBBt0RidmB3eYCw+k8iqutUe0hrpEG3MSrEHX4d+Zs8lriaEiRz/Aq/Z9fQEx4wreZHHyQFK9iwGKyrUdbb/JIVKJlARh+Q/tdryP3TJ0Sr2zZwmVnCvjuOJn9J4jh1+SAu9j4tzWuaDZ2oIkHcddDcX118Yu8xhZmBaX5wIFi4AG8TFhbTklsG8McCRIEyP8ASR6SOfRNkZiPH1v8Fmpy2zurnVfFUe08/tGtOkZWm0MVkaGNPedMchvcfkpq+JFNhcdB6k6ALn2VHPcXn3j6DcBy+pWhwjBfAiVvTG9YpU+P2W8zYeSEEuHbm4Jtjra3GvP5pak8N+I3eU6qDHYruE7x6/VCRd9eXOy3LjGnBbvaGi/5zS2AZlbndoBZLve6qTFmDU8ShBcbFxUl2UvsB7tpnj5K5YC7c/8Ayj4qk2G8UnwfdcACfGx6cV1TsCHGYb8foqV5NJ8CZoneKn+0/FCbOCI0+X0QqaaYN5Uht2pkouv70NHib+kqxz8lz3auv7jOJLj4QB8SqytYp4imwxDjG+ApmHKRICgo03Ncx2lwPAqzewOHP6LoMDSvTIbLdDqOIXN47ud1wJEd1038eJC6ejXaO6TyXObYxwe94De6CQPDf5oCXA1NFcUMRuI6LmcJUi6uqVWdEBcB2ZRvYOW7kl2VeKnL7SUArWaOXn80liac9RcJ98f2z0iEvVIO6EBjBvD4PUOHCNVb0jYuOnyVJgmQ4niQPL5qTH4lz/6TNP1u/wDEfPyQC2OxXt3gT3Gm3P8AcfWOXVWGFw4gEm0aaeIIvKWZhg3T/n0U1Cs2A0zvkQJ8D9lJA45rQNAbbxOvz5qIsERuExwW7Xt5k9Yt5LR1aN3xPrw5ICA23JDGaBvEx5RKaxFYwSSBPC09YVY4F7oBPM/m9QDNUuqHIz3RqfkFa0cO1jI4Fb4Cm1ghoutsT/aNSZP0QCpdfRdPgO8xpyg2g9RY71zjKcGV0WwzLHDcHfEBUvwXh9xo0R/Z/uWVMWcgsrHTcy2sw/rHmuU7R4kPrQDORrRMDU97Ua2cPGRuV+XeA1vH1XKYlmao94E5nEgagXWkLuZ34IqjzEjdC0rOqRnabbxN/irbCtsLCd8bkltRzw7uuib/AGutTEqTtB29LVhnMt13t48x9FmtipMPY08xLT6LDGUibucBwt8Y+SEkNMwrChVjelcVUaXjJMBoFzJMTv8ALyWWPQFuyvZNU63FU9N903TfwQFkXT/woqrLT8fkoW1Co8U8xA/4QGorZTEwTe1iByTbWgaWXO5znkmDOt7R0VphMXnYdJCEE78Q7MYWXsi/5ZQ4MEmY03pt7RpKA0ZW6ofVbqoXiEjiK0BAZxmJupNlYcOaXvcW3sQYP3VS58m6sCGPDSKgaQAMrpAEcICAdqtrsMsdnZuzAeqYbjxEvBY7QgGR1CROKcBArM/3H/xUX/p7nmfaBx4gGOk7kBcU6zHe66fwpzC417C4MIvBNgeS5huGcw3kQrjY2KGeDvEeO5Vrui0+S3O06w3j/ELCZrAAab1hZdjbBHbeLDRkJExmIve9pPDX0VJRZ7Qy57wJ0sAeQH3TO1GZ6j3E6PiRpAstfb2DW7tI+K1lYjKnrGX0wyAyQeqSrguHvQRvN55JyIbLjcqAgOF1coVOOpvgd0RvIuq4FdhsbZPt3uZnynKS2ROYgEhutuC5fGsyvcIiHEEcwq6tw0cUpVNdmQN1U9NyXUjXIUH2Dgsh5UGHenG1ApBvTrHfZSCrm4KB72jdJ5rcNDtLBARGh70SJ1JDSDBkRIseYUFLumPmmnOiyWrETIhANNrFtvFSOr2uk3GWyN3zTmG2cXMD6j2UmHQvJzOEwcrGhzj1iOesSQI4nFcEg95K6nCdnA9jqtM08Qxvv+zdU9owaBz6TmtcGniJHMqKngKQ0YPGSfVMBzTGyQBqVcYTZjYJdLnbhfL4xBKtGADQAdAt1AK+jg3g2pUxG8CT66qwFEwM4NuEgLLXZTIUr8RLeakCuLyhsEAgmLXjrwSFRoEZVPWfOmvDceR+qgc+2+DuOoPA8woB0uIeXU2E3kA+YQlsM+aFMTPPpIQsjfSu2tSPtHtEAOc13pf1Bsii0M5lbbYcTV5ZWgWA3kqCk0kgASSQAOJNgFpPgyryTOl1yU/gNkVqv/ToveJiWMc4eLgIGm/gvSezHYWjRpCri2te+Mxa4yxgicpGjzxmRa06mwdtys8xRpCjQFmlwio8EEy1lhSbp73e4hqVSlayZl08R5oNkYnDva99CozKWnMWOyCTaXgFqV/iX2e9k5mKpnNTrzmLRDWvbqJm4dcgwNCvWBjCYMkHrfrKU2ns7+Zw9fDPg5wXUzH62+g+5WM8s1R01FTx9O9vJ87LZgVptnYFfDH+qwtadHDvNd/qFp5GFVhbJ6cjTXk3afNSteTZRtKyFIJ2lSh5F1DQpF7g1oLnEwABJJ5Beh9kuxDpFbEhuUe7TMEdX7j/ANvmq1alay8xVPEcbh9g4qs0PpUXuYbZgIBPIkiRzFk1Q7FY12tMNH73NkdQJK9ooPBEMFukBFUADmud879I6V8efbPOdmdhMl6tQu07rRA10JNzu3BX57M0HS59MPcdS4knhFzAECwEAbleFaF3FZvkp+zWeOF4RyrtjnBVmYrDCCwnOz9LmO95h6jTnB3KftjsVmVuJoe5UAfA/dB8DfRdHUa1ze9oFUbfxOSg2lwaLcN5HmSJ5Sur4zqtTOX5MzONHnznwj2ihfO5aFy1OcbzrBdG9JurAXJUT8c070I0bezeCoH1wGuDh0PMJJ2KIPdKG187mgwL3UEnRUMNkpsbJ3uO8SYkAbghbUsTIsJQq9JbqNNr0i4hwGggx6fNY7N4tjMVTL47jmu6EGWnw97wXrXa/YVN7C1rGtkEd0BtvBeR19hY0O9lTa54LhEGJJgDgJ0uq8Va8J5XKxt5p6R2127WH8pSpT/UqlzjFi2mA6CeN8w5sU9DaOZoLtRE/VVmA2RisPhmMxLszmw9hAuyWkPpuMw5sEgEaRwW2ZjoLnZIjNwLSYPksvkd6R1fFzpZY4r+k8ZpyVJLCeI1b4ahNUdoZSINwQRPL8jxVbtZ5c4sNTMxoa1rhBjK1tx43SFGu9hioJEwHtFjwzD9J56dFi1012OlfadZ2OOosdoO69ocARIvYtI0mfivLO1PYd/tpwlAva4EljRdpFjA3NNuhMLucG4Pc10Q9unGLyD5lXWzcO84lrgO60FxI0IIIDeswtYp9Xb2YcsLo7+jx6j2B2g4SMG/xNJp8nOBTuz/AOG+Oe9ufDimzMMznVKchs94gNcZMTuX0CGhVm2Xy3IDGYEkmbhurfHRdLeI4pTbSODwPZ+jhh/SYJFi8nM926c3DkABZPvcQ0B5gcPgFu5haM5BA/S0j15+C3vAe8RwBFxz6rjrW9Z9GUksRG6o4CGy0JRuLDTDj0HHoFY4jZuIqDuU/wDU8ho9b+ipf/blejXFSrW7oF2MBIvoC4ixOszNlP8AG81leudzyWVSrMSI5KNzCdNOK29g+o8NpszHXWABxJi3xXQYTs7oajyf2skN8XG58MqtPE2tK1yqexwm38ZVplraNF9UiS7K1zg3TKDlBN7mBuC5DGVMS97va06mY/pFOoI82r6Fw+EYxuVjQ0cBbxPE9UxC6o+qxHHddT0+dcP2fxdWMmFquneRlHmVZs/hztF4J9nSZaYfUBJ5d0EL3iEQp0ph880/4f180VXtYRqAJIVxguwWHZBeHPPM2PgLL1/aOzm1BwcND8jyXM18M5jocIPoeh3q04zg51yy/Lz/AIc/Q7MYRpkYalP7mhw8nSFZ4PAU6YIZSY0HUMY1oPg0BNwt2qcRgqr2yCtgKdSM1NpjiB8kJsIVcNFVfptjO0OGe0986HVrh8lFhqI9qw/vb/8AIJLF9hsNldBqXB/WP/qrPDs/qN5Pb6OCw4PZ9P8A9Fcf06N8+zpcVRa5pDgCIOonVeS7Woim8tB0Jg8R0XsMKo2l2eoVgczGyeStUqjTjtyeXYe4lkA7wPdPUDQ8wrWjXEQ4RIuDcFWGL/hrSc7u1C08BmHwMeiUP8NmzlGJfPAlxCy/hOj/ACF7NNm41tBzg2HAtJaMwzCP082+q63s5iA5mZufvE3gECCQAQNFQ4D+HvsnBwcCeI//AEV2GzdnCk2NTxgNPP3dZKvEdL1leXnmp6Uu++SwDkvisI14MgTBgxME7wmQsLQ5U87lNW2Q5xaXPEs0AbYmN8+dkHYznPa91T3SDDWjvRoHE7uQV2CsqOlGj5aawwkMTs0PJJcQDEgRu4J8FZRpMom14F8LhW025WNAHqeZO9MoQpIBCEIAQhCAwoMTh2vBDhI/Lg7lOhCGk1jOXx2z3UzOrdx+qVaF172giCLKh2lgMneb7pOnD6hXT04+Xh6fsvAhCEAIUmB//9k=",
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