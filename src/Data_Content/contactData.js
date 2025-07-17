// src/data/contactData.js
import {
  contact_barcode,
  footLinkdin,
  mail_outline,
  call,
  location_on
} from '../assets/images';

export const contactInfoList = [
  {
    icon: location_on,
    content: (
      <>
        <span>Bethel Automotive Safety Systems (I) Pvt. Ltd.</span>
        Plot No. PAP-V-135, Vasuli, Chakan MIDC Ph-2, Pune 410 501
      </>
    )
  },
  {
    icon: call,
    link: 'tel:+9999999999',
    content: '+9999999999'
  },
  {
    icon: mail_outline,
    link: 'mailto:raajha.mp@wbtlindia.com',
    content: 'raajha.mp@wbtlindia.com'
  }
];

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/wbtl/',
    icon: footLinkdin,
    alt: 'LinkedIn'
  }
];

export const contactExtras = {
  barcodeImg: contact_barcode,
  barcodeAlt: 'WeChat',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.134538407193!2d73.75850917519827!3d18.792156682354836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b57a188a237b%3A0x3323ce2d04776489!2sBETHEL%20AUTOMOTIVE%20SAFETY%20SYSTEMS%20INDIA!5e0!3m2!1sen!2sin!4v1750230418390!5m2!1sen!2sin'
};
