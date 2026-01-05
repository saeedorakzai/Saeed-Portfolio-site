export const siteConfig = {
    name: "Primum Stilla",
    tagline: "The First Drop of Innovation",
    description: "AI-Powered Solutions | Mobile Apps | Web Development | Creative Services",
    url: "https://primumstilla.com",

    services: [
        {
            id: "ai-ml",
            name: "AI & Machine Learning",
            description: "Custom ML models, deep learning solutions, and intelligent automation",
            icon: "🤖"
        },
        {
            id: "mobile",
            name: "Mobile App Development",
            description: "Cross-platform iOS & Android apps with 100k+ downloads proven track record",
            icon: "📱"
        },
        {
            id: "web",
            name: "Full-Stack Web Development",
            description: "Modern web applications, e-commerce solutions, and custom platforms",
            icon: "💻"
        },
        {
            id: "creative",
            name: "Creative Services",
            description: "Graphic design, video editing, and SEO optimization",
            icon: "🎨"
        }
    ],

    portfolio: {
        apps: [
            {
                name: "Yumo",
                downloads: "100k+",
                url: "https://play.google.com/store/apps/details?id=com.lexur.yumo"
            },
            {
                name: "CanvasFlow",
                downloads: "100k+",
                url: "https://play.google.com/store/apps/details?id=com.lexur.canvasflow"
            },
            {
                name: "Rezume",
                downloads: "100k+",
                url: "https://play.google.com/store/apps/details?id=com.aftab.rezume"
            }
        ]
    },

    contact: {
        email: "hello@primumstilla.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    },

    mainNav: [
        { title: "Services", href: "#services" },
        { title: "Portfolio", href: "#portfolio" },
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" }
    ]
};

export type SiteConfig = typeof siteConfig;
