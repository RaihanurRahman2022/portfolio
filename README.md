# MD Raihanur Rahman - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my professional experience, projects, and skills as a Senior Software Engineer.

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/RaihanurRahman2022/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── skills/            # Skills & technologies
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
└── ...config files
```

## 🎨 Features

- ✨ Modern, responsive design with dark/light theme
- 🎭 Smooth animations and transitions
- 📱 Mobile-first approach
- 🎯 SEO optimized with meta tags and sitemap
- 📧 Contact form with validation
- 🚀 Fast page loads with Next.js optimization
- 🎨 Professional UI with shadcn/ui components
- 🔍 Competitive programming showcase
- 💼 Office & personal projects portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🌐 Pages

- **Home** (`/`) - Introduction and hero section
- **About** (`/about`) - Professional background and achievements
- **Projects** (`/projects`) - Office and personal projects
- **Skills** (`/skills`) - Technologies and competitive programming
- **Contact** (`/contact`) - Contact form and information

## 🚀 Deployment

This project can be deployed on:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Add environment variables if needed

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔧 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Service (Optional - for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=raihanur.rahman.2022@gmail.com
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**MD Raihanur Rahman**
- Email: raihanur.rahman.2022@gmail.com
- Phone: +8801881898980
- LinkedIn: [raihanur](https://linkedin.com/in/raihanur)
- GitHub: [@RaihanurRahman2022](https://github.com/RaihanurRahman2022)
- Location: Dhaka, Bangladesh

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspiration from modern web portfolios
