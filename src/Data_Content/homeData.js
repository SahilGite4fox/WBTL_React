// src/data/homeBannerData.js
import {
  homeBannerVideo,
  homeBannerImg,
  hmSecndSec1,
  hmSecndSec2,
  hmSecndSec3,
  hmSecndSec4,
  carplatorm,
  carPart1, carPart2, carPart3, carPart4, carPart5, carPart6, carPart7, carPart8,
  carPart11, carPart22, carPart33, carPart44, carPart55, carPart66, carPart77, carPart88,
  part1Arrow, part2Arrow, part3Arrow, part4Arrow, part5Arrow, part6Arrow, part7Arrow, part8Arrow,
  carsskeleton, carImg,precificIcon1, precificIcon2, precificIcon3, precificIcon4,
} from '../assets/images';

export const homeBannerData = [
  {
    title: 'Braking solutions for a safer, <span>better future</span>',
    mediaType: 'video',
    media: homeBannerVideo,
    tabLabel: 'Passenger Vehicle',
    tabId: 'tab-0',
    searchPlaceholder: 'Search for Passenger Vehicles equipment you need'
  },
  {
    title: 'Reliable stopping for your <span>SUV</span>',
    mediaType: 'image',
    media: homeBannerImg,
    tabLabel: 'SUV',
    tabId: 'tab-1',
    searchPlaceholder: 'Search for SUV Vehicles equipment you need'
  },
  {
    title: 'Safe braking for <span>LCV fleet</span>',
    mediaType: 'image',
    media: homeBannerImg,
    tabLabel: 'LCV',
    tabId: 'tab-2',
    searchPlaceholder: 'Search for LCV Vehicles equipment you need'
  }
];

export const hmSecSecData = [
  {
    title: "*WBTL INDIA* is a high-tech enterprise specializing in the manufacturing and sales of automotive safety solutions for the passenger vehicles, SUVs & Light commercial vehicles",
    description:
      "Bethel Automotive Safety Systems India Pvt Ltd (WBTL India) is a strategic joint venture between New Technology India Holding Inc, USA and India-based JNV Ventures Group. The JV has a technical collaboration agreement with WBTL, a China-based global leader in automotive safety systems.",
    btnLabel: "Explore More",
    btnLink: "/about",
    images: [hmSecndSec1, hmSecndSec2, hmSecndSec3, hmSecndSec4],
  },
];



export const productParts = [
  {
    id: 1,
    className: 'crPart11Btn',
    label: 'WCBS',
    position: 'left',
    carPartBoxImg: carPart1,
    partArrow: part1Arrow,
    solidPartImg: carPart11
  },
  {
    id: 2,
    className: 'crPart22Btn',
    label: 'EPB',
    position: 'right',
    carPartBoxImg: carPart2,
    partArrow: part2Arrow,
    solidPartImg: carPart22
  },
  {
    id: 3,
    className: 'crPart33Btn',
    label: 'Floating Caliper',
    position: 'left',
    carPartBoxImg: carPart3,
    partArrow: part3Arrow,
    solidPartImg: carPart33
  },
  {
    id: 4,
    className: 'crPart44Btn',
    label: 'Fixed Caliper',
    position: 'right',
    carPartBoxImg: carPart4,
    partArrow: part4Arrow,
    solidPartImg: carPart44
  },
  {
    id: 5,
    className: 'crPart55Btn',
    label: 'NLFC',
    position: 'left',
    carPartBoxImg: carPart5,
    partArrow: part5Arrow,
    solidPartImg: carPart55
  },
  {
    id: 6,
    className: 'crPart66Btn',
    label: 'Brake Module',
    position: 'right',
    carPartBoxImg: carPart6,
    partArrow: part6Arrow,
    solidPartImg: carPart66
  },
  {
    id: 7,
    className: 'crPart77Btn',
    label: 'ADAS',
    position: 'left',
    carPartBoxImg: carPart7,
    partArrow: part7Arrow,
    solidPartImg: carPart77
  },
  {
    id: 8,
    className: 'crPart88Btn',
    label: 'Aluminium Knuckle',
    position: 'right',
    carPartBoxImg: carPart8,
    partArrow: part8Arrow,
    solidPartImg: carPart88
  }
];

export const carImages = {
  platform: carplatorm,
  skeleton: carsskeleton,
  solid: carImg
};


export const specificationData = [
  {
    title: 'Global Presence',
    value: '02+',
    unit: 'countries',
    icon: precificIcon1,
  },
  {
    title: 'Products',
    value: '10+',
    unit: '',
    icon: precificIcon2,
  },
  {
    title: 'Awards',
    value: '20+',
    unit: '',
    icon: precificIcon3,
  },
  {
    title: 'Team',
    value: '2000+',
    unit: '',
    icon: precificIcon4,
  },
];