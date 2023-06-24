import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, sponsorData } from "@/data";
import { FAQs } from ".";

export function Home() {
  return (
    <>
      <div
        id="#home"
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
      >
        <div className="absolute top-0 h-full w-full bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full rounded-xl border border-gray-800 bg-gray-900 bg-opacity-50 p-4 text-center lg:w-8/12 lg:p-10 ">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                TCET OPEN CONF
              </Typography>
              <Typography variant="lead" color="white" className="">
                "Unlock the Power of Open Source at TCET OpenConf! Join us for a
                day of inspiration, collaboration, and cutting-edge innovation,
                where students and industry experts come together to shape the
                future of open-source technology."
              </Typography>
              <a
                href="https://twitter.com/tcetopensource"
                target="blank"
                className="mx-auto mt-6 flex w-max flex-row items-center justify-center"
              >
                <button className="action ">
                  Stay Tuned
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                {/* <UsersIcon className="h-6 w-6 text-blue-gray-900" /> */}
                <img src="/openconf.png" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                OpenConf is an expo event marking the product launch of TCET
                Open Source. It showcases cutting-edge projects, hosts inspiring
                keynotes/sessions, and facilitates networking and collaboration.
                With a diverse community of developers, industry leaders, and
                enthusiasts, OpenConf fosters a spirit of transparency and
                empowerment. It welcomes participants from TCET and outside
                organizations who share a passion for open source. Join us to
                learn, share, and shape the future of technology in this dynamic
                event.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/about.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    TCET Open Source
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    TCET Open Source is a vibrant organisation dedicated to
                    open-source development and collaboration. It offers
                    students and enthusiasts a platform to contribute to
                    projects, gain hands-on experience, and solve real-world
                    problems. TCET Open Source fosters a culture of learning,
                    building, and innovation.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div id="agenda" className="container mx-auto">
          <PageTitle heading="Agenda">
            After a warm welcome and some great speeches, the promotion and
            quick talks about our product launches by open source will commence.
            A panel of discussion shall be held later.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form> */}
          <section id="sponsors" className="px-4 pb-48 pt-20">
            <div className="container mx-auto">
              <PageTitle heading="Sponsors">
                {" "}
                {/* Make changes here for Organizers */}
                Our incredible sponsors to fuel our event and making open source
                widely accessible to individuals.
              </PageTitle>
              <div className=" mt-12 grid grid-cols-1 gap-12 gap-x-24 text-center ">
                {sponsorData.map(({ sponsors, title }) => (
                  <div className="">
                    <h1 className="text-3xl font-medium ">{title}</h1>
                    {sponsors.length ? (
                      <div className="mt-4 rounded-lg bg-gray-100 p-4 shadow-md 
                      grid grid-cols-2 lg:grid-cols-4 gap-8 justify-between
                      ">
                        {sponsors.map(({name, img}) => (
                        <TeamCard
                          key={name}
                          img={img}
                          name={name}
                          // position={position}
                          // socials={
                          //   <div className="flex items-center gap-2">
                          //     {socials.map(({ color, name, href }) => (
                          //       <IconButton key={name} color={color} variant="text">
                          //         <a
                          //           href={href}
                          //           target="_blank"
                          //           className={`fa-brands text-lg fa-${name}`}
                          //         />
                          //       </IconButton>
                          //     ))}
                          //   </div>
                          // }
                        />
                        ))}
                      </div>
                    ) : (
                      <h2 className="text-3xl shadow-md w-[60%] italic bg-gray-100 rounded-lg mx-auto p-4 lg:p-8 mt-4 ">Coming Soon</h2>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <FAQs /> {/* Make changes here for the FAQs section */}
        </div>
      </section>

      <section id="organizers" className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="Organizers" id="organizers">
            {" "}
            {/* Make changes here for Organizers */}
            The team of amazing organizers behind nurturing open source
            community through TCET Open Conf to guide young budding developers.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-16 md:grid-cols-2 xl:grid-cols-5">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, href }) => (
                      <IconButton key={name} color={color} variant="text">
                        <a
                          href={href}
                          target="_blank"
                          className={`fa-brands text-lg fa-${name}`}
                        />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
