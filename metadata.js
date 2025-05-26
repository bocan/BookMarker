const bookmarks = [
 // {
 //   "url": "",
 //   "title": "",
 //   "description": "",
 //   "tags": [""],
 //   "publicationYear": ""
 // },
  {
    "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
    "title": "Kubectl Quick Reference",
    "description": "A quick reference guide for kubectl commands, providing a concise overview of the most commonly used commands and their options. This is a great resource for anyone working with Kubernetes.",
    "tags": ["kubernetes", "tech"],
    "publicationYear": "2025",
  },
  {
    "url": "https://k8syaml.com/",
    "title": "K8s YAML Generator",
    "description": "A tool to generate Kubernetes YAML files for various resources like deployments, services, and more. It provides a user-friendly interface to create and customize Kubernetes configurations.",
    "tags": ["kubernetes", "devops", "tech"],
    "publicationYear": "2025"
  },
  {
    "url": "https://www.cloudskillsboost.google/course_templates/593",
    "title": "Google Cloud Skills Boost - AI and Machine Learning",
    "description": "A collection of courses and resources on Google Cloud's AI and Machine Learning offerings. It includes hands-on labs, quests, and skill badges to help you learn and demonstrate your expertise in AI and ML on Google Cloud.",
    "tags": ["google-cloud", "AI", "ML", "courses", "training", "tech"],
    "publicationYear": "2025",
  },
  {
    "url": "https://docs.docker.com/build/building/best-practices/",
    "title": "Dockerfile Best Practices",
    "description": "A guide to best practices for writing Dockerfiles, including tips on how to optimize your Docker images and improve build performance.",
    "tags": ["docker", "best-practices", "tech"],
    "publicationYear": "2025",
  },
  {
    "url": "https://docs.docker.com/build/building/multi-platform/",
    "title": "Building Multi-Platform Images",
    "description": "A guide on how to build Docker images that can run on multiple platforms, including tips on using Buildx and QEMU.",
    "tags": ["docker", "multi-platform", "buildx", "tech"],
    "publicationYear": "2025",
  },
  {
    "url": "https://chris.funderburg.me/",
    "title": "Chris Funderburg's Blog / Home Page",
    "description": "My home page, where I share my thoughts and idea.",
    "tags": ["home", "blog", "me"],
    "publicationYear": "2025"
  },
  {
    "url": "https://joshcollinsworth.com/blog/fwiw",
    "title": "Advice on Job Hunting in Tech",
    "description": "A blog post by Josh Collinsworth sharing his thoughts and advice on job hunting in the tech industry.",
    "tags": ["job-hunting", "tech", "advice"],
    "publicationYear": "2024",
    "archive": "archive/For whatever it's worth_ my advice on job hunting in tech - Josh Collinsworth blog.html"
  },
  {
    "url": "https://supremecbd.uk/",
    "title": "Supreme CBD",
    "tags": ["cbd", "medicine", "health"],
    "publicationYear": "2025"
  },
  {
    "url": "https://www.thebromptonman.com/torque-settings.html",
    "title": "Brompton Torque Settings",
    "description": "A comprehensive guide to the torque settings for various components of a Brompton bicycle.",
    "tags": ["cycling", "brompton", "maintenance"],
    "publicationYear": "2025",
    "archive": "archive/Torque Settings - THEBROMPTONMAN.html"
  },
  {
    "url": "https://www.hockerty.uk/en-uk/",
    "title": "Hockerty - Custom Tailored Clothing",
    "description": "Hockerty offers custom tailored clothing. You can design your own clothes online and have them made to your specifications. They provide a wide range of options for suits, shirts, and other garments.",
    "tags": ["fashion", "clothing", "tailoring"],
    "publicationYear": "2025"
  },
  {
    "url": "https://medium.com/@vvbvargas/how-i-built-my-kubernetes-cluster-with-a-shared-storage-on-raspberry-pi-using-k3s-1c06b424df97",
    "title": "How I built my Kubernetes cluster with a shared storage on Raspberry Pi using K3s",
    "tags": ["kubernetes", "raspberry-pi"],
    "publicationYear": "2023"
  },
  {
    "url": "https://github.com/sindresorhus/awesome",
    "title": "Awesome Lists",
    "description": "😎 Awesome lists about all kinds of interesting topics.",
    "tags": ["awesome", "tech"],
    "publicationYear": "2025"
  },
  {
    "url": "https://github.com/donnemartin/awesome-aws",
    "title": "Awesome AWS",
    "description": "A curated list of awesome Amazon Web Services (AWS) libraries, open source repos, guides, blogs, and other resources. Featuring the Fiery Meter of AWSome.",
    "tags": ["awesome", "aws", "tech"],
    "publicationYear": "2025",
    "archive": "archive/donnemartin_awesome-aws_ A curated list of awesome Amazon Web Services (AWS) libraries, open source repos, guides, blogs, and other resources. Featuring the Fiery Meter of AWSome.html"
  },
  {
    "url": "https://github.com/wmariuss/awesome-devops",
    "title": "Awesome DevOps",
    "description": "A curated list of awesome DevOps platforms, tools, practices and resources.",
    "tags": ["awesome", "devops", "tech"],
    "publicationYear": "2025"
  },
  {
    "url": "https://www.udemy.com/home/my-courses/learning/",
    "title": "Udemy - My Courses",
    "description": "A collection of my courses on Udemy.",
    "tags": ["udemy", "courses", "training"],
    "publicationYear": "2025"
  },
  {
    "url": "https://techworld-with-nana.teachable.com/courses/enrolled/2186952",
    "title": "TechWorld with Nana - DevSecOps Bootcamp",
    "description": "A comprehensive DevSecOps Bootcamp that covers the essential skills and tools needed for a career in DevSecOps. The course includes hands-on labs, quizzes, and a final project to help you apply what you've learned.",
    "tags": ["techworld", "courses", "devops", "training"],
    "publicationYear": "2025"
  },
  {
    "url": "https://superorbital.io/blog/aws-auth-and-kubernetes-deep-dive/",
    "title": "AWS Auth and Kubernetes Deep Dive",
    "description": "A deep dive into AWS authentication and Kubernetes.",
    "tags": ["tech", "aws", "kubernetes", "auth"],
    "publicationYear": "2024",
    "archive": "archive/A Hands-on Deep Dive into _br_AWS Auth and Kubernetes.html"
  },
  {
    "url": "https://earth.nullschool.net/",
    "title": "Earth Nullschool",
    "description": "A global map of wind, weather, and ocean conditions. It provides a visual representation of the Earth's atmosphere and ocean currents.",
    "tags": ["weather", "earth", "maps"],
    "publicationYear": "2025"
  },
  {
    "url": "https://www.lightningmaps.org/#m=oss;t=3;s=0;o=0;b=;ts=0;",
    "title": "Lightning Maps",
    "description": "A real-time map of lightning strikes around the world. You can see where lightning is striking and how it moves.",
    "tags": ["weather", "lightning", "maps"],
    "publicationYear": "2025"
  },
  {
    "url": "https://www.aeinstein.org/198-methods-of-nonviolent-action",
    "title": "Methods of Nonviolent Action",
    "description": "A list of 198 methods of nonviolent action compiled by Gene Sharp. It includes various forms of protest, noncooperation, and intervention.",
    "tags": ["nonviolence", "protest", "activism"],
    "publicationYear": "2025"
  },
  {
    "url": "https://github.com/ossu/computer-science",
    "alturl": "https://cs.ossu.dev/",
    "title": "OSSU Computer Science - Open Source Society University",
    "description": "The OSSU curriculum is a complete education in computer science using online materials. It's not merely for career training or professional development. It's for those who want a proper, well-rounded grounding in concepts fundamental to all computing disciplines, and for those who have the discipline, will, and (most importantly!) good habits to obtain this education largely on their own, but with support from a worldwide community of fellow learners.",
    "tags": ["courses", "education", "ossu"],
    "publicationYear": "2025",
  },
 // {
 //   "url": "",
 //   "title": "",
 //   "description": "",
 //   "tags": [""],
 //   "publicationYear": ""
 // },
];
