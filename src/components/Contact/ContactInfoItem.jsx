import React from 'react';

const ContactInfoItem = ({ icon, children, link }) => {
    return (
        <li>
            <div className="contactInfo d-flex algnItmCent">
                <div className="contactInfoIcon">
                    <img src={icon} alt="icon" />
                </div>
                <div className="contactInfoTxt">
                    {link ? <a href={link}>{children}</a> : <p>{children}</p>}
                </div>
            </div>
        </li>
    );
};

export default ContactInfoItem;
