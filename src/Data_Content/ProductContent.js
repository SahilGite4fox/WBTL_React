import {
    Product_WCBS1, Product_EPB, Product_NLFC, Product_Floating_Caliper,
    Product_Fixed_caliper1, Product_WCBS, Product_Aluminum_knuckle, Product_ADAS
} from '../assets/images';

export const tabButtons = [
    { id: "tab-0", label: "All" },
    { id: "tab-1", label: "Passenger Car" },
    { id: "tab-2", label: "SUV" },
    { id: "tab-3", label: "LCV" }
];

export const allProducts = [
    {
    id: 1,
    title: 'WCBS 1.0 2',
    image: Product_WCBS1,
    tabs: ['tab-0', 'tab-1', 'tab-3'],
    description: [
      "Integrated vacuum booster, E-Booster, M/C and ESC functions.",
      "1st Chinese Tier1 One-Box SOP.",
      "Faster pressure build-up to supports AEB; TTL ca. 150 – 200 ms.",
      "Maximized energy recovery by decoupled design.",
      "With EPB support in backup mode.",
      "Programmable brake pedal feel including pedal travel vs pedal force."
    ]
  },
  {
    id: 2,
    title: 'EPB',
    image: Product_EPB,
    tabs: ['tab-0', 'tab-1', 'tab-3'],
    description: [
      "High-performance parking brake system.",
      "Smooth integration with ESC systems.",
      "Advanced electronic actuator."
    ]
  },
  {
    id: 3,
    title: 'NLFC',
    image: Product_NLFC,
    tabs: ['tab-0', 'tab-1'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ]
  },
    { id: 4, title: 'Floating Caliper', image: Product_Floating_Caliper, tabs: ['tab-0', 'tab-2'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ] },
    { id: 5, title: 'Fixed Caliper 1', image: Product_Fixed_caliper1, tabs: ['tab-0', 'tab-2'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ] },
    { id: 6, title: 'Brake Module', image: Product_WCBS, tabs: ['tab-0', 'tab-2'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ] },
    { id: 7, title: 'Aluminum Knuckle', image: Product_Aluminum_knuckle, tabs: ['tab-0', 'tab-2'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ] },
    { id: 8, title: 'ADAS', image: Product_ADAS, tabs: ['tab-0', 'tab-2', 'tab-3'],
    description: [
      "Next-level floating caliper design.",
      "Lightweight and durable material.",
      "Optimized braking force distribution."
    ] }
];
