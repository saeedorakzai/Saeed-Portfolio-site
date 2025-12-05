import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Saeed Ullah Portfolio',
        short_name: 'Saeed Portfolio',
        description: '3D Interactive Portfolio of Saeed Ullah',
        start_url: '/',
        display: 'standalone',
        background_color: '#030014',
        theme_color: '#030014',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
