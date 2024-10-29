// src/components/Team.js
import React from 'react';
import './Team.css';

// Combined data for Production Engineering Association (PEA) and Society of Manufacturing Engineers (SME)
const combinedMembers = [
    // Secretary
    { name: "NITIS PRABU M", organization: "PEA", role: "Secretary", image: "/img/pea_secretary.jpg", linkedin: "https://linkedin.com/in/peasecretary" },
    { name: "ARUN K", organization: "SME", role: "Secretary", image: "/img/sme_secretary.jpg", linkedin: "https://linkedin.com/in/smesecetary" },

    // Joint Secretaries
    { name: "B VIKASHINI", organization: "PEA", role: "Joint Secretary", image: "/img/join_secretary1.jpg", linkedin: "https://linkedin.com/in/joinsecretary1" },
    { name: "BALAJI C", organization: "PEA", role: "Joint Secretary", image: "/img/join_secretary2.jpg", linkedin: "https://linkedin.com/in/joinsecretary2" },
    { name: "SUBIRAMANIAN V J", organization: "SME", role: "Joint Secretary", image: "/img/sme_join_secretary1.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary1" },
    { name: "R S DIYA VISALI", organization: "SME", role: "Joint Secretary", image: "/img/sme_join_secretary2.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary2" },

    // Senior Executives
    { name: "R R DHIVAGARAN", organization: "PEA", role: "Senior Executive", image: "/img/senior_executive1.jpg", linkedin: "https://linkedin.com/in/seniorexecutive1" },
    { name: "DHINNESH S", organization: "PEA", role: "Senior Executive", image: "/img/senior_executive2.jpg", linkedin: "https://linkedin.com/in/seniorexecutive2" },
    { name: "SHANMUGAM S", organization: "PEA", role: "Senior Executive", image: "/img/senior_executive3.jpg", linkedin: "https://linkedin.com/in/seniorexecutive3" },
    { name: "J DEVI SRI", organization: "PEA", role: "Senior Executive", image: "/img/senior_executive4.jpg", linkedin: "https://linkedin.com/in/seniorexecutive4" },
    { name: "NANDHAGOPAL S", organization: "SME", role: "Senior Executive", image: "/img/sme_senior_executive1.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive1" },
    { name: "KRUTHI T P", organization: "SME", role: "Senior Executive", image: "/img/sme_senior_executive2.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive2" },
    { name: "V JAYASENTHILNATHAN", organization: "SME", role: "Senior Executive", image: "/img/sme_senior_executive3.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive3" },
    { name: "GOKUL RAMANA V", organization: "SME", role: "Senior Executive", image: "/img/sme_senior_executive4.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive4" },

    // Junior Executives
    { name: "SUKANTH N R", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive1.jpg", linkedin: "https://linkedin.com/in/juniorexecutive1" },
    { name: "DEEPIKA S P", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive2.jpg", linkedin: "https://linkedin.com/in/juniorexecutive2" },
    { name: "NHARGUNA NANGAI M B", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive3.jpg", linkedin: "https://linkedin.com/in/juniorexecutive3" },
    { name: "NIMESHA S", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive4.jpg", linkedin: "https://linkedin.com/in/juniorexecutive4" },
    { name: "AISHAA NIHAR Z", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive5.jpg", linkedin: "https://linkedin.com/in/juniorexecutive5" },
    { name: "KANCIA ROSLIN MARY", organization: "PEA", role: "Junior Executive", image: "/img/junior_executive6.jpg", linkedin: "https://linkedin.com/in/juniorexecutive6" },
    { name: "RITHIKA G", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive1.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive1" },
    { name: "VINOTHINI D", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive2.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive2" },
    { name: "KRISITHA J S", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive3.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive3" },
    { name: "MOHAMED VASEEM J", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive4.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive4" },
    { name: "MANJUSWETHA S V", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive5.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive5" },
    { name: "KISHORE KANΝΑΝ Β", organization: "SME", role: "Junior Executive", image: "/img/sme_junior_executive6.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive6" },

    // Common volunteers for both organizations
    { name: "THIRUSURIYAA S U", organization: "Common", role: "Volunteer", image: "/img/volunteer1.jpg", linkedin: "https://linkedin.com/in/volunteer1" },
    { name: "N MUGILAN", organization: "Common", role: "Volunteer", image: "/img/volunteer2.jpg", linkedin: "https://linkedin.com/in/volunteer2" },
    { name: "GIRIDHARAN T", organization: "Common", role: "Volunteer", image: "/img/volunteer3.jpg", linkedin: "https://linkedin.com/in/volunteer3" },
    { name: "SABARISAN E", organization: "Common", role: "Volunteer", image: "/img/volunteer4.jpg", linkedin: "https://linkedin.com/in/volunteer4" },
    { name: "ADHIYAN KHAN A", organization: "Common", role: "Volunteer", image: "/img/volunteer5.jpg", linkedin: "https://linkedin.com/in/volunteer5" },
    { name: "NEKA S", organization: "Common", role: "Volunteer", image: "/img/volunteer6.jpg", linkedin: "https://linkedin.com/in/volunteer6" },
    { name: "RIVALIN R", organization: "Common", role: "Volunteer", image: "/img/volunteer7.jpg", linkedin: "https://linkedin.com/in/volunteer7" },
    { name: "SRIVARDHNY D S", organization: "Common", role: "Volunteer", image: "/img/volunteer8.jpg", linkedin: "https://linkedin.com/in/volunteer8" },
    { name: "ADITHYA R B", organization: "Common", role: "Volunteer", image: "/img/volunteer9.jpg", linkedin: "https://linkedin.com/in/volunteer9" },
    { name: "SHARVESH D", organization: "Common", role: "Volunteer", image: "/img/volunteer10.jpg", linkedin: "https://linkedin.com/in/volunteer10" },
];

const Team = () => {
    const roles = ["Secretary", "Joint Secretary", "Senior Executive", "Junior Executive", "Volunteer"];

    return (
        <div className="team-section">
            <h1 className="team-title">Our Team</h1>
            {roles.map((role) => (
                <div key={role}>
                    <h2 className="role-title">{role}</h2>
                    <div className="team-member-grid">
                        {combinedMembers
                            .filter(member => member.role === role)
                            .map(member => (
                                <div className="team-member" key={member.name}>
                                    <img src={member.image} alt={member.name} className="team-member-image" />
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-organization">{member.organization}</p>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
                                </div>
                            ))}
                    </div>
                    <hr className="role-divider" /> {/* Horizontal line after each role's members */}
                </div>
            ))}
        </div>
    );
};

export default Team;
