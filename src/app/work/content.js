export const projectsData = [
  {
    id: "graph-fake-news-detector",
    title: "Graph-Based Fake News Detection System",
    category: "AI & Graph Neural Networks",
    description: "Formulated an applied Graph Convolutional Network (GCN) pipeline to evaluate news credibility using inter-document graphs.",
    tags: ["PyTorch Geometric", "NetworkX", "TF-IDF", "Scikit-learn", "GCN"],
    highlights: [
      "Engineered a dense adjacency matrix via vectorized cosine similarity thresholding (>0.3) across 500-dimensional TF-IDF vectors.",
      "Designed a 2-layer GCNConv network with dropout (p=0.5), reducing Cross-Entropy loss from 0.4161 to 0.2480.",
      "Achieved a 0.91 Macro F1-score and 91.20% test accuracy across a balanced transductive evaluation set of 1,000 articles."
    ],
    github: "https://github.com/Vishwadhar0000",
    liveUrl: "https://vishwadhar0000.github.io"
  },
  {
    id: "bert-faq-microservice",
    title: "Production BERT FAQ Conversational Microservice",
    category: "NLP & Microservices",
    description: "Developed an asynchronous NLP microservice using BERT embeddings and FastAPI to automate e-commerce query resolution.",
    tags: ["Python", "BERT", "FastAPI", "Telegram API", "Render", "Vector Search"],
    highlights: [
      "Built dense vector matching over structured FAQ knowledge bases, enabling contextual query resolution without rigid keyword rules.",
      "Configured automated cloud deployment pipelines using Render service specifications (render.yaml) for continuous uptime.",
      "Integrated Telegram Bot API webhooks and cosine confidence thresholding to execute graceful fallbacks on low-confidence inputs."
    ],
    github: "https://github.com/Vishwadhar0000",
    liveUrl: "https://vishwadhar0000.github.io"
  },
  {
    id: "mobile-click-fraud-detector",
    title: "Mobile Click-Fraud Anomaly Detector",
    category: "Machine Learning & Telemetry",
    description: "Engineered a client-side anomaly detection model to detect bot clicks and touch injection attacks on mobile telemetry feeds.",
    tags: ["Python", "Scikit-learn", "Anomaly Detection", "Feature Engineering"],
    highlights: [
      "Extracted behavioral features (touch coordinate variance, sequence intervals) to capture non-human interaction patterns.",
      "Benchmarked lightweight tree-based classifiers to support offline, battery-efficient inference without remote network round-trips."
    ],
    github: "https://github.com/Vishwadhar0000",
    liveUrl: "https://vishwadhar0000.github.io"
  }
];