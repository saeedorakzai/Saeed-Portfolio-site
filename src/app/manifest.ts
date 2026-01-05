import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Primum Stilla - The First Drop of Innovation',
        short_name: 'Primum Stilla',
        description: 'AI-Powered Solutions, Mobile App Development, Full-Stack Web Development, and Creative Services',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A0F1E',
        theme_color: '#00D1FF',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
