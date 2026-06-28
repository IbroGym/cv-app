import React from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Box from '../../components/Box';
import Expertise from '../../components/Expertise';
import TimeLine from '../../components/TimeLine';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Feedback from '../../components/Feedback';
import './Inner.scss';
import avatar from '../../assets/images/avatar.png';

// ── Education ──────────────────────────────────────────────────────────────────
const educationData = [
  {
    year: '2017 – 2023',
    title: 'High School Education',
    description:
      'Nazarbayev Intellectual School, Atyrau, Kazakhstan. Graduated with a strong interest in mathematics, computer science, and competitive chess, which later shaped both my academic and professional journey.',
  },
  {
    year: '2023 – 2026',
    title: "Bachelor's Degree in Software Engineering",
    description:
      'Astana IT University, Astana, Kazakhstan. Studied software engineering, algorithms, databases, web development, QA Testing and object-oriented programming.',
  },
  {
    year: '2025 – 2026',
    title: 'Front-End Development using AI tools',
    description:
      'Epam Systems, online course. Deepened my knowledge of frontend development during the 31-week course.',
  },
];

// ── Experience ─────────────────────────────────────────────────────────────────
const experienceData = [
  {
    date: 'June, 2025 – July, 2025',
    info: {
      company: 'TCO',
      job: 'QA Tester (Internship)',
      description:
        'Involved in company project "Gas Balance 360" as a manual tester. Used Swagger UI and Postman tools to recognize defects and reported findings in Excel and Word documents.',
    },
  },
  {
    date: 'Jan, 2026 – June, 2026',
    info: {
      company: 'Startup project',
      job: 'Software Developer',
      description:
        'Developed startup project "AI-Powered Smart Bus Stop Assistant" which guides passengers with disabilities through city bus transportation in Astana. Technologies: Raspberry PI 4, HC-SR501 PIR Motion sensor, Speaker, GTFS Static data, gpt-4o-mini AI Assistant, OpenLeaf map, TypeScript, React.',
    },
  },
];

// ── Contacts ───────────────────────────────────────────────────────────────────
const addressData = [
  { faIcon: faPhone, text: '+7 778 788 62 05', href: 'tel:+77787886205' },
  { faIcon: faEnvelope, text: 'galymzhanulyibragim@gmail.com', href: 'mailto:galymzhanulyibragim@gmail.com' },
  {
    faIcon: faFacebook,
    label: 'Facebook',
    text: 'facebook.com/ibragim',
    link: 'https://www.facebook.com/profile.php?id=100009254250671',
  },
  {
    faIcon: faInstagram,
    label: 'Instagram',
    text: '@ikwwws',
    link: 'https://www.instagram.com/ikwwws/',
  },
  {
    faIcon: faLinkedinIn,
    label: 'LinkedIn',
    text: 'linkedin.com/in/ibragim-galymzhanuly',
    link: 'https://www.linkedin.com/in/ibragim-galymzhanuly-74283a295/',
  },
];

// ── Feedback ───────────────────────────────────────────────────────────────────
const feedbackData = [
  {
    feedback:
      'I wholeheartedly recommend Ibragim for any team or organization. His passion, skill, and professionalism are evident not only in chess but in all his endeavors. I believe he has the potential to excel in any field he chooses to pursue, making him an outstanding asset to any team.',
    reporter: {
      photoUrl: avatar,
      name: 'Arsultan Nursapa',
      citeUrl: 'https://www.linkedin.com/in/anursapa/',
    },
  },
  {
    feedback:
      'Ibragim is an outstanding individual with a rare combination of technical prowess and excellent interpersonal skills. He has been a tremendous asset to our chess club, and I am confident that he will bring the same level of dedication and skill to any endeavor he undertakes.',
    reporter: {
      photoUrl: avatar,
      name: 'Caner Onoglu',
      citeUrl: 'https://www.linkedin.com/in/caneronoglu/',
    },
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────
const Inner = () => {
  return (
    <div className="inner-page">
      <section id="about">
        <Box
          title="About me"
          content="Hi, I'm Ibragim, a software developer and chess coach from Kazakhstan. I enjoy building web applications, learning new technologies, and solving challenging problems. My main tools include JavaScript, TypeScript, React, and modern development practices, and I'm continuously working to improve my skills as an engineer. Outside of programming, chess has been an important part of my life for many years. I hold a FIDE rating of over 2000, earned the title of Candidate Master of Sports, and became a World Champion with my team in 2024. Chess has shaped the way I think, teaching me patience, strategic planning, and analytical decision-making. I believe that curiosity and lifelong learning are the foundations of growth, whether in technology, academics, or life itself."
        />
      </section>

      <section id="education">
        <Box title="Education">
          <TimeLine data={educationData} />
        </Box>
      </section>

      <section id="experience">
        <Box title="Experience">
          <Expertise data={experienceData} />
        </Box>
      </section>

      <section id="portfolio">
        <Box title="Portfolio">
          <Portfolio />
        </Box>
      </section>

      <section id="contacts">
        <Box title="Contacts">
          <Address data={addressData} />
        </Box>
      </section>

      <section id="feedback">
        <Box title="Feedback">
          <Feedback data={feedbackData} />
        </Box>
      </section>
    </div>
  );
};

export default Inner;
