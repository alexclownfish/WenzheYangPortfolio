# Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap. Content is managed through a JSON configuration file, making it easy to update your information after deployment.

## Quick Start

```bash
npm install
npm run dev
```

## Configuration

Edit `src/data/portfolio.json` to customize your portfolio content:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "email": "your.email@example.com",
  "github": "https://github.com/...",
  "linkedin": "https://linkedin.com/in/...",
  "twitter": "https://twitter.com/...",
  "skills": [...],
  "projects": [...],
  "experience": [...]
}
```

## Build

```bash
npm run build
```

Build output will be in the `dist/` directory.

## Deployment

### Docker

Build the Docker image:

```bash
docker build -t portfolio .
```

Run the container:

```bash
docker run -d -p 8080:80 --name portfolio portfolio
```

Or use Docker Compose:

```bash
docker-compose up -d
```

### Kubernetes

Apply the Kubernetes manifests:

```bash
kubectl apply -f k8s/
```

Check the deployment status:

```bash
kubectl get pods -l app=portfolio
```

Port-forward to access the service locally:

```bash
kubectl port-forward service/portfolio 8080:80
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── Navbar.tsx      # Navigation component
│   ├── pages/
│   │   ├── Home.tsx        # Home/Hero page
│   │   ├── About.tsx       # About me page
│   │   ├── Skills.tsx      # Skills page
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Contact.tsx     # Contact page
│   ├── data/
│   │   └── portfolio.json  # Portfolio content configuration
│   ├── App.tsx
│   └── main.tsx
├── k8s/
│   ├── deployment.yaml      # Kubernetes Deployment
│   └── service.yaml        # Kubernetes Service
├── Dockerfile
├── docker-compose.yaml
└── package.json
```

## Pages

- `/` - Home page with hero section and highlights
- `/about` - About me with experience
- `/skills` - Skills with progress bars
- `/projects` - Project showcase with cards
- `/contact` - Contact information

## Technologies

- React 18
- TypeScript
- Bootstrap 5
- React Router v6
- Vite
