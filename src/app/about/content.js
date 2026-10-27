export const HEADING = {
  title: "Vishwadhar Kyatham",
  subtitle: "Applied AI & Machine Learning Engineer",
  location: "London, UK"
};

export const SECTION = {
  aboutTitle: "About Me",
  experienceTitle: "Experience & Education",
  skillsTitle: "Technical Expertise"
};

export const BIO = [
  "Applied AI & Machine Learning Engineer with postgraduate training in NLP, Graph Neural Networks, and transformer architectures (BERT).",
  "Experienced in engineering end-to-end pipelines from raw corpus preprocessing to asynchronous FastAPI microservices, transductive GCN modeling, and cloud deployments across the UK."
];

export const EXPERIENCE = [
  {
    role: "MSc in Artificial Intelligence",
    company: "University of East London, UK",
    period: "2024 – 2026",
    description: "Merit / 2:1 Standing (67%). Focused on Machine Learning, Deep Learning, Natural Language Processing, AI Ethics, and Research Methods."
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "Narsimha Reddy Engineering College, India",
    period: "2018 – 2022",
    description: "CGPA: 6.5 / 10.0. Core foundations in data structures, algorithms, and software engineering."
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "University of East London",
    period: "2024 – 2026",
    details: "Merit / 2:1 Standing (67%)"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Narsimha Reddy Engineering College",
    period: "2018 – 2022",
    details: "CGPA: 6.5 / 10.0"
  }
];

export const SKILLS = [
  {
    category: "Machine Learning & DL",
    items: ["PyTorch", "PyTorch Geometric", "TensorFlow", "Keras", "Scikit-learn", "GCN", "CNN", "LSTM"]
  },
  {
    category: "NLP & Transformers",
    items: ["BERT", "Hugging Face", "TF-IDF", "Word2Vec", "spaCy", "NLTK", "Tokenization", "Semantic Search"]
  },
  {
    category: "Deployment & MLOps",
    items: ["FastAPI", "Uvicorn", "REST APIs", "Render (IaC)", "Docker (Basics)", "Git / GitHub", "Linux / Bash"]
  },
  {
    category: "Languages & Metrics",
    items: ["Python (NumPy, Pandas, SciPy)", "SQL", "Macro F1-Score", "Cross-Validation", "ROC-AUC"]
  }
];

export const CERTIFICATIONS = [
  "Generative AI & LLM Foundations – LinkedIn Learning",
  "Mathematical Foundations of Machine Learning – Udemy",
  "Natural Language Processing – Great Learning",
  "Introduction to AI – Great Learning"
];

// Fallback objects to prevent undefined errors across components
export const aboutData = {
  HEADING,
  SECTION,
  BIO,
  EXPERIENCE,
  EDUCATION,
  SKILLS,
  name: HEADING.title,
  role: HEADING.subtitle,
  location: HEADING.location,
  bio: BIO.join(" ")
};

export default aboutData;