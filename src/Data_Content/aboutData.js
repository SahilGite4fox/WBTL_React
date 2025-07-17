import { aboutBanner, ourvision, aboutImg1, aboutImg2 } from '../assets/images';

export const aboutPageData = {
  banner: {
    title: 'About Us',
    bannerImg: aboutBanner,
    breadcrumbs: [{ label: 'About Us', active: true }]
  },
  aboutUs: {
    title: 'ABOUT WBTL INDIA',
    paragraphs: [
      'Bethel Automotive Safety Systems India Pvt Ltd (WBTL India) is a strategic joint venture between New Technology India Holding Inc, USA and India-based JNV Ventures Group. The JV has a technical collaboration agreement with WBTL, a China-based global leader in automotive safety systems.',
      'WBTL India has established a state-of-the art manufacturing facility at Chakan, near Pune. The JNV Ventures Group operates across 9 verticals: Automotive (2 wheelers, 4 wheelers and heavy-duty trucks), Railways, Aerospace, Defence, Infrastructure (Oil & Gas), Industrial, Agricultural applications, Home Appliances & White Goods, and Wellness. The Group has a pan-India manufacturing footprint.',
      'WBTL China is a high-tech enterprise specializing in R&D, manufacturing and sales of automotive safety systems and advanced driver assistance systems (ADAS). It has been recognised as one of China\'s top 100 automotive components enterprises.',
      'WBTL has independent development capabilities and product series for mechanical brake systems such as disc brake modules, fixed calipers, integrated parking brakes, foundation brakes and boosters. It also has capabilities in lightweight products (aluminum knuckles, aluminum control arms, aluminum calipers) and steering systems.',
      'WBTL China has also focussed on independent R&D of high-end electronic control products, and has built up independent development and validation for'
    ],
    list: [
      'Front disc brake with low drag feature',
      'Electric parking brake (EPB)',
      'Vehicle stability control systems (ESC)',
      'Electric power lift gate systems (ELGS)',
      'One-Box / Wire-controlled brake system (WCBS)',
      'Advanced driving assistance systems (ADAS)',
      'Electric power steering systems (C-EPS / Rack EPS)',
      'Electronic Suspension Systems (AIR SUSPENSION) and',
      'Light weight components (Knuckles / Control Arms / Sub Frames).'
    ],
    closing:
      'WBTL has full testing capabilities and quality control systems, and can independently complete precision measurement and various comprehensive performance experiments throughout the entire process from product design to production; its flexible assembly line conducts 100% online monitoring of products thereby ensuring excellent performance.',
    images: [aboutImg1, aboutImg2]
  },
  vision: {
    title: 'Our Vision',
    image: ourvision,
    text:
      'WBTL India, part of the JNV Ventures Group (www.jnvgroup.co) is committed to redefining India’s automotive safety standards by integrating world-class technology with deep market insight and expertise. Our goal is to enhance vehicle safety and performance by providing cutting-edge braking, steering, and integrated safety solutions which will provide superior driving experience. With our comprehensive suite of products, we hope to make India’s roads safer for both drivers and pedestrians. WBTL India is an equal-opportunity employer.'
  },
  mission: {
    title: 'Our Mission',
    image: ourvision,
    text:
      'To provide world class braking solutions at cost effective prices and delivered to customers by best in class employees.'
  }
};
