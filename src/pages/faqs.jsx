import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader, 
    AccordionBody,
    Typography
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";

import PropTypes from "prop-types";

export function FAQs({ questions }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.95 },
    };

    return (
        <div className="space-y-2">
            <PageTitle heading="FAQs?">
                Frequently Asked Questions.
            </PageTitle>
            
            {questions.map(({header, paragraph}, index) => (
                <Accordion key={index} open={open === index+1} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(index+1)} className="text-blue-gray-900 font-medium text-left">
                        {header}
                    </AccordionHeader>
                    <AccordionBody>
                        <Typography className="text-blue-gray-500">
                            {paragraph}
                        </Typography>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    )
}

FAQs.defaultProps = {
    questions: [
        {
            header: "What is the event about?",
            paragraph: "OpenConf is an open-source event organized by the TCET open-source community. The event aims to showcase the projects developed by the TCET open-source community through product launches. It also includes lightning talks and a panel discussion featuring open-source experts, CEOs, and advocates. The event is designed for TCET students as well as individuals from outside organizations.",
        }, 
        {
            header: "When is the event taking place?",
            paragraph: "The event is scheduled to take place on 15th July,2023 . Please note that the date is subject to change, so we recommend checking the event website or contacting the organizers for the most up-to-date information.",
        }, 
        {
            header: "Where is the event being held?",
            paragraph: "OpenConf will be held at Thakur college of engineering and technology, located at Thakur Village,Kandivali (E), Mumbai. Detailed directions and transportation options are provided on the event website.",
        }, 
        {
            header: "How can I register for the event?",
            paragraph: "To register for the OpenConf event, please visit the event website at link. Look for the registration section and follow the instructions provided. Fill in the required information, including your name, contact details, and any affiliations you have (such as your organization or educational institution). Once you have completed the registration process, you will receive a confirmation email with further details.",
        },
        {
            header: "Is there a registration fee for attending the event?",
            paragraph: "No, there is no registration fee for attending the OpenConf event. It is free of charge for all participants.",
        }, 
        {
            header: "What is the event schedule and agenda?",
            paragraph: "The schedule and detailed agenda will be available on the event website closer to the event date, stay tuned.",
        }, 
        {
            header: "Will there be refreshments provided during the event?",
            paragraph: "Yes, light refreshments such as snacks and beverages will be provided during designated break times. However, please note that full meals may not be included. You may want to plan accordingly and consider having a meal before or after the event.",
        }, 
        {
            header: "Is this In Person Event accessible to all students?",
            paragraph: "This event is accesible to everyone. We welcome students from other colleges as well. Tickets will be issued.",
        },
        {
            header: "Will there be any opportunities for networking with the speakers and experts?",
            paragraph: "Yes, OpenConf aims to foster networking opportunities. There will be a panel discussion where you can connect with the speakers, open-source experts, CEOs, and advocates. Additionally, you can interact with fellow attendees during breaks and networking activities.",
        },
        {
            header: "Will the event be recorded or live-streamed for remote viewing?",
            paragraph: `The organizers will make an announcement closer to the event regarding any plans for 
            recording or live-streaming. Please refer to the event website or contact the organizers for more information.
            If you encounter any issues during the registration process or have specific questions, please reach out to the event organizers at  contact.
            `,
        },
    ],
};

FAQs.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object),
};

FAQs.displayName = "/src/pages/faqs.jsx";

export default FAQs;