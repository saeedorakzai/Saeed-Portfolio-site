# Saeed Ullah - 3D Portfolio Website

A cutting-edge, interactive 3D portfolio website featuring stunning animations, an intelligent avatar with eye-tracking authentication, and comprehensive project showcases.

![Portfolio Demo](docs/portfolio_website_demo_1764722380263.webp)

## 🌟 Features

- **3D Hero Section** with animated sphere using React Three Fiber
- **Advanced Animations**: Particle field, cursor trail, scroll progress indicator
- **Animated Avatar** with eye-tracking for authentication
- **Authentication System** powered by Supabase
- **Contact Form** with database integration
- **Media Gallery** with lightbox
- **Responsive Design** for all devices
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router) with TypeScript
- **React 18** with Server Components
- **Tailwind CSS** for styling
- **React Three Fiber** for 3D graphics
- **@react-three/drei** for 3D helpers
- **Framer Motion** for animations
- **GSAP** for advanced animations

### Backend & Database
- **Supabase** (PostgreSQL + Authentication + Storage)

### Deployment
- **Vercel** (automatic deployments)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/saeedorakzai/portfolio-website.git

# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Supabase credentials to .env.local
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── (auth)/          # Authentication pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── 3d/              # Three.js components
│   │   ├── auth/            # Auth components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Page sections
│   │   └── ui/              # UI components
│   ├── lib/                 # Utility functions
│   └── styles/              # Style configurations
├── public/                  # Static assets
├── docs/                    # Documentation
└── package.json
```

## 📚 Documentation

- [Implementation Plan](docs/implementation_plan.md) - Detailed technical plan
- [Task List](docs/task.md) - Development checklist
- [Walkthrough](docs/walkthrough.md) - Complete implementation walkthrough
- [Supabase Setup Guide](docs/supabase_setup_guide.md) - Backend configuration

## 🎨 Design System

### Colors
- **Primary (Cyan)**: `#00D9FF`
- **Secondary (Purple)**: `#7C3AED`
- **Accent (Amber)**: `#F59E0B`
- **Background**: `#0A0A0F`
- **Surface**: `#1A1A2E`

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Code**: JetBrains Mono

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/saeedorakzai/portfolio-website)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Saeed Ullah**
- GitHub: [@saeedorakzai](https://github.com/saeedorakzai)
- LinkedIn: [Saeed Ullah](https://www.linkedin.com/in/orakzaisaeed)
- Email: saeed69840@gmail.com

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Supabase for the backend infrastructure
- Vercel for hosting and deployment
- React Three Fiber community for 3D capabilities

---

**Built with ❤️ using Next.js, React Three Fiber, and Supabase**
