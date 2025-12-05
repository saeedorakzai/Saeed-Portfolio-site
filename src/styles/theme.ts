export const theme = {
    colors: {
        primary: '#00D9FF', // Cyan
        secondary: '#7C3AED', // Purple
        accent: '#F59E0B', // Amber
        background: '#0A0A0F', // Deep Dark
        surface: '#1A1A2E', // Dark Surface
        text: '#E5E7EB', // Light Gray
        textMuted: '#9CA3AF', // Muted Gray
    },
    fonts: {
        heading: 'var(--font-inter)',
        body: 'var(--font-inter)',
        code: 'var(--font-jetbrains-mono)',
    },
    animation: {
        duration: {
            ui: 0.3,
            scene: 1.5,
        },
        ease: [0.43, 0.13, 0.23, 0.96], // Custom cubic-bezier
    },
} as const;
