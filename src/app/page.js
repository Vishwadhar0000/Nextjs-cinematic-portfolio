export const projectsData = [
  {
    title: "Graph-Based Fake News Detection System",
    category: "Graph Neural Networks / NLP",
    description: "Applied GCN pipeline evaluating news credibility via inter-document graphs. Engineered dense adjacency matrices via cosine similarity (>0.3) over 500-D TF-IDF vectors, using a 2-layer GCNConv network with dropout (p=0.5) to achieve 91.20% test accuracy and a 0.91 Macro F1-score across 1,000 articles.",
    tech: ["PyTorch Geometric", "NetworkX", "TF-IDF", "Scikit-learn", "Python"],
    github: "https://github.com/Vishwadhar0000",
    demo: "#"
  },
  {
    title: "Production BERT FAQ Conversational Microservice",
    category: "NLP / Microservices / Cloud",
    description: "Asynchronous NLP microservice using BERT embeddings and FastAPI for automated e-commerce query resolution. Utilizes dense vector matching across structured knowledge bases, Telegram Bot API webhooks, and Render cloud deployments (render.yaml).",
    tech: ["Python", "BERT", "FastAPI", "Uvicorn", "Telegram API", "Render"],
    github: "https://github.com/Vishwadhar0000",
    demo: "#"
  },
  {
    title: "Mobile Click-Fraud Anomaly Detector",
    category: "Machine Learning / Edge AI",
    description: "Client-side anomaly detection system identifying bot clicks and touch injection attacks. Extracts behavioral metrics (touch coordinate variance, sequence intervals) and benchmarks lightweight tree-based classifiers for battery-efficient offline inference.",
    tech: ["Python", "Scikit-learn", "Feature Engineering"],
    github: "https://github.com/Vishwadhar0000",
    demo: "#"
  }
];
