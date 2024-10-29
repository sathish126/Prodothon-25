// src/components/Team.js
import React from 'react';
import './Team.css';

// Data for Production Engineering Association (PEA)
const peaMembers = [
    {
        name: "NITIS PRABU M",
        role: "Secretary",
        image: "/img/pea_secretary.jpg",
        linkedin: "https://linkedin.com/in/peasecretary"
    },
    {
        name: "B VIKASHINI",
        role: "Joint Secretary",
        image: "/img/join_secretary1.jpg",
        linkedin: "https://linkedin.com/in/joinsecretary1"
    },
    {
        name: "BALAJI C",
        role: "Joint Secretary",
        image: "/img/join_secretary2.jpg",
        linkedin: "https://linkedin.com/in/joinsecretary2"
    },
    {
        name: "R R DHIVAGARAN",
        role: "Senior Executive",
        image: "/img/senior_executive1.jpg",
        linkedin: "https://linkedin.com/in/seniorexecutive1"
    },
    {
        name: "DHINNESH S",
        role: "Senior Executive",
        image: "/img/senior_executive2.jpg",
        linkedin: "https://linkedin.com/in/seniorexecutive2"
    },
    {
        name: "SHANMUGAM S",
        role: "Senior Executive",
        image: "/img/senior_executive3.jpg",
        linkedin: "https://linkedin.com/in/seniorexecutive3"
    },
    {
        name: "J DEVI SRI",
        role: "Senior Executive",
        image: "/img/senior_executive4.jpg",
        linkedin: "https://linkedin.com/in/seniorexecutive4"
    },
    {
        name: "SUKANTH N R",
        role: "Junior Executive",
        image: "/img/junior_executive1.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive1"
    },
    {
        name: "DEEPIKA S P",
        role: "Junior Executive",
        image: "/img/junior_executive2.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive2"
    },
    {
        name: "NHARGUNA NANGAI M B",
        role: "Junior Executive",
        image: "/img/junior_executive3.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive3"
    },
    {
        name: "NIMESHA S",
        role: "Junior Executive",
        image: "/img/junior_executive4.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive4"
    },
    {
        name: "AISHAA NIHAR Z",
        role: "Junior Executive",
        image: "/img/junior_executive5.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive5"
    },
    {
        name: "KANCIA ROSLIN MARY",
        role: "Junior Executive",
        image: "/img/junior_executive6.jpg",
        linkedin: "https://linkedin.com/in/juniorexecutive6"
    },
];

// Data for Society of Manufacturing Engineers (SME)
const smeMembers = [
    {
        name: "ARUN K",
        role: "Secretary",
        image: "/img/sme_secretary.jpg",
        linkedin: "https://linkedin.com/in/smesecetary"
    },
    {
        name: "SUBIRAMANIAN V J",
        role: "Joint Secretary",
        image: "/img/sme_join_secretary1.jpg",
        linkedin: "https://linkedin.com/in/smejoinsecretary1"
    },
    {
        name: "R S DIYA VISALI ",
        role: "Joint Secretary",
        image: "/img/sme_join_secretary2.jpg",
        linkedin: "https://linkedin.com/in/smejoinsecretary2"
    },
    {
        name: "NANDHAGOPAL S",
        role: "Senior Executive",
        image: "/img/sme_senior_executive1.jpg",
        linkedin: "https://linkedin.com/in/smeseniorexecutive1"
    },
    {
        name: "KRUTHI T P",
        role: "Senior Executive",
        image: "/img/sme_senior_executive2.jpg",
        linkedin: "https://linkedin.com/in/smeseniorexecutive2"
    },
    {
        name: "V JAYASENTHILNATHAN",
        role: "Senior Executive",
        image: "/img/sme_senior_executive3.jpg",
        linkedin: "https://linkedin.com/in/smeseniorexecutive3"
    },
    {
        name: "GOKUL RAMANA V",
        role: "Senior Executive",
        image: "/img/sme_senior_executive4.jpg",
        linkedin: "https://linkedin.com/in/smeseniorexecutive4"
    },
    {
        name: "RITHIKA G",
        role: "Junior Executive",
        image: "/img/sme_junior_executive1.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive1"
    },
    {
        name: "VINOTHINI D",
        role: "Junior Executive",
        image: "/img/sme_junior_executive2.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive2"
    },
    {
        name: "KRISITHA J S",
        role: "Junior Executive",
        image: "/img/sme_junior_executive3.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive3"
    },
    {
        name: "MOHAMED VASEEM J",
        role: "Junior Executive",
        image: "/img/sme_junior_executive4.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive4"
    },
    {
        name: "MANJUSWETHA S V",
        role: "Junior Executive",
        image: "/img/sme_junior_executive5.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive5"
    },
    {
        name: "KISHORE KANΝΑΝ Β",
        role: "Junior Executive",
        image: "/img/sme_junior_executive6.jpg",
        linkedin: "https://linkedin.com/in/smejuniorexecutive6"
    },
];

// Common volunteers for both organizations
const volunteers = [
    {
        name: "THIRUSURIYAA S U",
        role: "Volunteer",
        image: "/img/volunteer1.jpg",
        linkedin: "https://linkedin.com/in/volunteer1"
    },
    {
        name: "N MUGILAN",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "GIRIDHARAN T",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "SABARISAN E",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "ADHIYAN KHAN A",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "NEKA S",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "RIVALIN R",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "SRIVARDHNY D S",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "ADITHYA R B",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
    {
        name: "SHARVESH D",
        role: "Volunteer",
        image: "/img/volunteer2.jpg",
        linkedin: "https://linkedin.com/in/volunteer2"
    },
];

const Team = () => {
    return (
        <div className="team-section">
            <h1 className="team-title">Our Team</h1>

            <h2 className="organization-title">Production Engineering Association (PEA)</h2>
            <div className="team-members">
                {peaMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} className="member-photo" />
                        <h2 className="member-name">{member.name}</h2>
                        <p className="member-role">{member.role}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            LinkedIn Profile
                        </a>
                    </div>
                ))}
            </div>

            <h2 className="organization-title">Society of Manufacturing Engineers (SME)</h2>
            <div className="team-members">
                {smeMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} className="member-photo" />
                        <h2 className="member-name">{member.name}</h2>
                        <p className="member-role">{member.role}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            LinkedIn Profile
                        </a>
                    </div>
                ))}
            </div>

            <h2 className="organization-title">Volunteers</h2>
            <div className="team-members">
                {volunteers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.image} alt={member.name} className="member-photo" />
                        <h2 className="member-name">{member.name}</h2>
                        <p className="member-role">{member.role}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            LinkedIn Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
