export const jobOpenings = [
  {
    id: 1,
    title: 'Quality Manager',
    positions: 1,
    experience: '7+ years',
    location: 'Chakan, Pune, India',
    qualification: 'Bachelor’s Degree in Engineering',
    description:
      'We are seeking a highly skilled Quality Manager to oversee and lead the quality assurance function at our manufacturing facility specializing in braking systems. The successful candidate will implement and manage Quality Management Systems, ensure compliance with customer and regulatory standards, and foster a culture of continuous improvement across the organization.',
    tabs: ['tab-0', 'tab-1'], // All + R&D
    details: {
      employmentType: 'Full-time',
      experienceRequired: 'Minimum 7+ Years',
      jobLocation: 'Chakan, Pune, India',
      responsibilities: {
        'Quality Leadership': [
          'Develop, implement, and maintain the Quality Management System in compliance with ISO 9001 and IATF 16949 standards.',
          'Lead the quality team to achieve both operational and strategic objectives.',
          'Define and enforce quality policies, procedures, and best practices across the organization.'
        ],
        'Customer and Supplier Quality Management': [
          'Serve as the primary liaison for customer quality concerns, audits, and complaint resolution.',
          'Ensure customer satisfaction by addressing quality issues using tools such as 8D, 5 Why.',
          'Collaborate with suppliers to maintain the quality of incoming materials and address supplier quality concerns effectively.'
        ],
        'Process and Product Quality Assurance': [
          'Oversee in-process and final quality inspections to ensure adherence to product specifications and industry standards.',
          'Drive the implementation of APQP, PPAP, and FMEA methodologies.',
          'Monitor and analyze Statistical Process Control and Measurement System Analysis to ensure process stability and capability.'
        ],
        'Continuous Improvement': [
          'Lead initiatives to reduce defects, scrap, and rework rates.',
          'Collaborate with cross-functional teams to identify process optimization opportunities.',
          'Facilitate Kaizen events and lead Six Sigma projects to improve operational efficiency and product quality.'
        ],
        'Audits and Compliance': [
          'Conduct internal audits and prepare the organization for external certifications such as ISO 9001 and IATF 16949.',
          'Ensure compliance with all customer-specific requirements, industry standards, and regulatory guidelines.'
        ],
        'Team Development': [
          'Train, mentor, and guide the quality team to build their technical and managerial competencies.',
          'Promote a strong culture of quality awareness across departments and teams.'
        ]
      },
      salary: 'Commensurate with experience and skills',
      requirements: [
        'Bachelor’s Degree in Engineering',
        'Expert in quality methods, e.g.- QFD, CTQ, FMEA, DRBFM'
      ],
      education: [
        'Bachelor’s degree in Mechanical Engineering, Automotive Engineering, or Industrial Engineering. A Master’s degree in a related field is preferred.'
      ],
      experience: [
        '10–12 years in quality management within the automotive sector, particularly in braking systems.',
        'Strong expertise in quality management standards, including ISO 9001, IATF 16949, and customer-specific requirements.',
        'Hands-on experience with quality tools and methodologies such as APQP, PPAP, FMEA, SPC, MSA, and CAPA.',
        'Proven track record in implementing quality improvement initiatives and leading cross-functional teams.',
        'Strong analytical, problem-solving, and decision-making skills.',
        'Exceptional communication, interpersonal, and leadership abilities.',
        'Proficient in quality management software and ERP systems.'
      ]
    }
  },
  {
    id: 2,
    title: 'Assistant Manager',
    positions: 1,
    experience: '10+ years',
    location: 'Mumbai, India',
    qualification: 'Bachelor’s Degree in Engineering',
    description:
      'We are looking for an Assistant Manager to support our financial operations, budgeting, and reporting. The ideal candidate should have strong analytical skills and a deep understanding of financial statements and compliance.',
    tabs: ['tab-0', 'tab-3'], // All + Finance & Accounts
    details: {
      employmentType: 'Full-time',
      experienceRequired: 'Minimum 10 Years',
      jobLocation: 'Mumbai, India',
      responsibilities: {
        'Financial Oversight': [
          'Prepare and review budgets, forecasts, and financial reports.',
          'Ensure compliance with regulatory requirements.',
          'Coordinate internal audits and implement control measures.'
        ],
        'Strategic Analysis': [
          'Analyze financial data to support strategic decisions.',
          'Monitor company performance through KPIs and financial metrics.'
        ]
      },
      salary: 'As per industry standards',
      requirements: ['Bachelor’s Degree in Engineering', 'Knowledge of SAP & ERP tools'],
      education: ['Bachelor’s degree in Finance, Accounting or related field'],
      experience: ['10+ years in finance roles', 'Experience in manufacturing is a plus']
    }
  },
  {
    id: 3,
    title: 'Junior Supervisor',
    positions: 1,
    experience: '1+ years',
    location: 'Pune, India',
    qualification: 'Bachelor’s Degree in Engineering',
    description:
      'We are hiring a Junior Supervisor to assist in managing shop floor operations and ensure smooth production processes.',
    tabs: ['tab-0', 'tab-2'], // All + Operations
    details: {
      employmentType: 'Full-time',
      experienceRequired: 'Minimum 1 Year',
      jobLocation: 'Pune, India',
      responsibilities: {
        'Operations Supervision': [
          'Monitor daily shop floor operations.',
          'Report issues to senior supervisors and assist in resolving them.'
        ],
        'Production Management': [
          'Ensure adherence to quality and safety standards.',
          'Maintain logs and documentation of activities.'
        ]
      },
      salary: '₹3.6 – ₹4.2 LPA',
      requirements: ['Basic knowledge of production tools', 'Willing to work in shifts'],
      education: ['Diploma or Bachelor’s in Mechanical/Production Engineering'],
      experience: ['1–2 years in manufacturing or production roles']
    }
  }
];

export const tabButtons = [
  { id: 'tab-0', label: 'All Openings' },
  { id: 'tab-1', label: 'R&D' },
  { id: 'tab-2', label: 'Operations' },
  { id: 'tab-3', label: 'Finance & Accounts' },
  { id: 'tab-4', label: 'Sales & Marketing' },
  { id: 'tab-5', label: 'Human Resources' }
];
