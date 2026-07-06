import { createServer, Model } from 'miragejs';

const educations = [
  {
    date: '2017 – 2023',
    title: 'High School Education',
    description:
      'Nazarbayev Intellectual School, Atyrau, Kazakhstan. Graduated with a strong interest in mathematics, computer science, and competitive chess.',
  },
  {
    date: '2023 – 2026',
    title: "Bachelor's Degree in Software Engineering",
    description:
      'Astana IT University, Astana, Kazakhstan. Studied software engineering, algorithms, databases, web development, QA Testing and object-oriented programming.',
  },
  {
    date: '2025 – 2026',
    title: 'Front-End Development using AI tools',
    description:
      'Epam Systems, online course. Deepened my knowledge of frontend development during the 31-week course.',
  },
];

const defaultSkills = [
  { name: 'React', range: 100 },
  { name: 'CSS', range: 55 },
  { name: 'HTML', range: 50 },
  { name: 'JavaScript', range: 90 },
];

export default function server() {
  createServer({
    models: {
      skill: Model,
    },

    seeds(server) {
      defaultSkills.forEach((skill) => server.create('skill', skill));
    },

    routes() {
      this.namespace = 'api';
      this.timing = 3000;

      this.get('/educations', () => {
        return educations;
      });

      this.get('/skills', (schema) => {
        return schema.skills.all().models.map((m) => m.attrs);
      });

      this.post('/skills', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const skill = schema.skills.create(attrs);
        return skill.attrs;
      });
    },
  });
}
