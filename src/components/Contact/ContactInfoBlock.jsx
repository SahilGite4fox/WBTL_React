import React from 'react';
import ContactInfoItem from './ContactInfoItem';
import { contactInfoList, socialLinks, contactExtras } from '../../Data_Content/contactData';

const ContactInfoBlock = () => {
  return (
    <div className="contactContSec">
      <div className="contactContFrmTitle comm_Title black">
        <h4>
          Head <span>Office</span>
        </h4>
      </div>

      <div className="contactContInfo">
        <ul>
          {contactInfoList.map((item, index) => (
            <ContactInfoItem
              key={index}
              icon={item.icon}
              link={item.link}
            >
              {item.content}
            </ContactInfoItem>
          ))}
        </ul>
      </div>

      <div className="footSocial footSocial1 d-flex algnItmCent">
        <p>Follow us on</p>
        <ul className="d-flex algnItmCent">
          {socialLinks.map((social, idx) => (
            <li key={idx}>
              <a href={social.href} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="contactBarcodeSec footSocial">
        <p>&nbsp;WeChat Subscription Account</p>
        <div className="contactBarcode">
          <img src={contactExtras.barcodeImg} alt={contactExtras.barcodeAlt} />
        </div>
      </div>

      <div className="contactLocation">
        <iframe
          src={contactExtras.mapSrc}
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactInfoBlock;
