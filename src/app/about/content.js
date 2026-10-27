export const aboutData = {
  name: "Vishwadhar Kyatham",
  role: "Applied AI & Machine Learning Engineer",
  location: "London, UK",
  bio: [
    "Applied AI & Machine Learning Engineer with postgraduate training in NLP, Graph Neural Networks, and transformer architectures (BERT).",
    "Experienced in engineering end-to-end pipelines from raw corpus preprocessing to asynchronous FastAPI microservices, transductive GCN modeling, and cloud deployments on Render.",
    "Targeting AI Engineer and Machine Learning Engineer roles across the UK."
  ],
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Core Projects", value: "3+" },
    { label: "F1 Score Achieved", value: "0.91" }
  ],
  skills: [
    { category: "Languages & Core", items: ["Python (NumPy, Pandas, SciPy)", "SQL", "Git", "Linux/Bash"] },
    { category: "Machine Learning & DL", items: ["PyTorch", "PyTorch Geometric", "TensorFlow", "Scikit-learn", "GCN", "CNN"] },
    { category: "NLP & Transformers", items: ["BERT", "Hugging Face", "spaCy", "NLTK", "TF-IDF", "Vector Search"] },
    { category: "Deployment & MLOps", items: ["FastAPI", "Uvicorn", "REST APIs", "Render (IaC)", "Docker"] }
  ],
  education: [
    {
      degree: "Master of Science in Artificial Intelligence (Merit / 2:1)",
      institution: "University of East London, London, UK",
      year: "2024 – 2026",
      details: "Modules: Machine Learning, Deep Learning, Natural Language Processing, AI Ethics, Research Methods"
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Narsimha Reddy Engineering College, India",
      year: "2018 – 2022"
    }
  ],
  certifications: [
    "Generative AI & LLM Foundations — LinkedIn Learning",
    "Mathematical Foundations of Machine Learning — Udemy",
    "Natural Language Processing — Great Learning",
    "Introduction to AI — Great Learning"
  ]
};

export default function AboutPage() {
  // If your template renders the view from src/views/about.jsx:
  const AboutView = require("@/views/about").default;
  return <AboutView data={aboutData} />;
}
