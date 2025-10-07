import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'shadabarzoo6@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Shadab, I am reaching out to you because...',

    //oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/shadabarzoo' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/shadabarzoo/' },
    { name: 'insta', url: 'https://www.instagram.com/wrty_fighter/?__coig_challenged=1' },
    //{ name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Dart',
            icon: '/logo/dart.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Azure',
            icon: '/logo/Azure.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
    title: 'GymFluencer',
    slug: 'gymfluencer',
    liveUrl: 'https://shadabarzoo.github.io/GymFluencer/',
    year: 2025,
    description: `
        A responsive frontend application for a gym management system built to deliver a seamless fitness experience. <br/><br/>

        Key Features:<br/>
        <ul>
        <li>💪 Membership Plans: View different subscription packages with ease</li>
        <li>📅 Class Schedules: Interactive calendar of gym classes</li>
        <li>🧑‍🏫 Trainer Profiles: Detailed trainer bios and specialties</li>
        <li>📱 Fully Responsive: Works flawlessly across devices</li>
        <li>⚡ Smooth UI: Built for performance and user satisfaction</li>
        </ul><br/>

        Technical Highlights:<br/>
        <ul>
        <li>Created modular components using React and Tailwind CSS</li>
        <li>Used React Router for smooth navigation between pages</li>
        <li>Implemented reusable layout and card components</li>
        <li>Optimized for GitHub Pages deployment</li>
        </ul>
    `,
    role: `
        Frontend Developer <br/>
        Owned the entire frontend development:<br/>
        <ul>
        <li>🎨 UI Development: Designed and coded responsive components with Tailwind CSS</li>
        <li>🔁 Routing: Managed client-side navigation using React Router</li>
        <li>⚙️ Optimization: Focused on fast load times and smooth interactions</li>
        <li>🚀 Deployment: Hosted the app on GitHub Pages</li>
        </ul>
    `,
    techStack: ['React', 'Tailwind CSS', 'React Router DOM', 'GitHub Pages'],
    thumbnail: '/projects/thumbnail/gymflu.png',
    longThumbnail: '/projects/long/gymflu.png',
    images: [
        '/projects/images/gymflu.png',
        '/projects/images/gymflu1.png',
        '/projects/images/gymflu2.png',
    ],
},
{
    title: 'The Bridal Bloom',
    slug: 'bridal-bloom',
    liveUrl: 'https://github.com/shadabarzoo/TheBridalBloom',
    year: 2024,
    description: `
        👗 The Bridal Bloom is a fully responsive web application designed for a fashion designer to showcase and sell bridal wear and formal clothing collections. It features a ✨ clean UI, 🔍 intuitive navigation, and organized sections including Bridal, Formal, Ready to Wear, and Men’s Wear.<br/><br/>

        Key Features:<br/>
        <ul>
        <li>🛍️ Categorized product browsing (Bridal, Formal, Ready to Wear, Men’s Wear)</li>
        <li>🔍 Product image zoom effects for better preview</li>
        <li>🛒 Shopping cart experience powered by Firebase</li>
        <li>📱 Fully responsive UI</li>
        </ul><br/>

        Technical Highlights:<br/>
        <ul>
        <li>Built with React, React Router, and Tailwind CSS</li>
        <li>Integrated Firebase for product storage and order management</li>
        <li>Focused on pixel-perfect UI to match client branding</li>
        </ul>
    `,
    role: `
        Frontend Developer <br/>
        Owned the frontend implementation:<br/>
        <ul>
        <li>⚛️ Developed the layout and structure using React</li>
        <li>🔗 Connected Firebase for real-time data handling</li>
        <li>🖱️ Implemented zoom effects, interactive navigation, and category filtering</li>
        <li>🎯 Delivered a refined UI based on the client's vision</li>
        </ul>
    `,
    techStack: ['React', 'MongoDB', 'Tailwind CSS', 'React Router', 'API Integration'],
    thumbnail: '/projects/thumbnail/bbHome.png',
    longThumbnail: '/projects/long/bbHome.png',
    images: [
        '/projects/images/bbHome.png',
        '/projects/images/bbDress.png',
        '/projects/images/bbCart.png',
        '/projects/images/bbFeedback.png',
    ],
},
{
    title: 'Dairy Milk',
    slug: 'dairy-milk',
    liveUrl: 'https://github.com/shadabarzoo/DairyMilk',
    year: 2023,
    description: `
        🍫 A fully responsive e-commerce platform built for Dairy Milk products, enabling users to browse, select, and purchase chocolates online. Developed using Flutter and integrated with Firebase for real-time updates, the platform delivers a seamless shopping experience.<br/><br/>

        Key Features:<br/>
        <ul>
        <li>🛒 Browse & purchase Dairy Milk products with ease</li>
        <li>📊 Auto price calculation based on selected products</li>
        <li>📱 Fully responsive UI across Android/iOS</li>
        <li>☁️ Real-time database sync with Firebase</li>
        </ul><br/>

        Technical Highlights:<br/>
        <ul>
        <li>Built with Flutter and Dart for cross-platform deployment</li>
        <li>Used Firebase for authentication, database, and backend operations</li>
        <li>UI tailored for chocolate-based e-commerce branding</li>
        </ul>
    `,
    role: `
        Full-Stack Developer <br/>
        Managed the entire development lifecycle:<br/>
        <ul>
        <li>🎨 Created interactive UI using Flutter widgets</li>
        <li>🔗 Connected to Firebase for real-time data management</li>
        <li>💰 Built price calculation logic for dynamic cart updates</li>
        <li>📦 Managed user flow from product selection to checkout</li>
        </ul>
    `,
    techStack: ['Flutter', 'Dart', 'Firebase'],
    thumbnail: '/projects/thumbnail/dm1.jpeg',
    longThumbnail: '/projects/long/dm1.jpeg',
    images: [
        '/projects/images/dm1.png',
        '/projects/images/dm2.png',
        '/projects/images/dm3.png',
    ],
},
{
    title: 'Spotify Clone',
    slug: 'spotify-clone',
    // liveUrl: '', // (Add your link here if available)
    year: 2022,
    description: `
        🎵 A front-end clone of the Spotify web interface created to mimic its modern and sleek design. Developed using HTML, CSS, and Bootstrap, it replicates key elements of the Spotify UI including playlists, trending sections, and artist highlights.<br/><br/>

        Key Features:<br/>
        <ul>
        <li>🎧 UI components for playlists, albums, and trending music</li>
        <li>📱 Responsive design adapting across all screen sizes</li>
        <li>🎨 Visually accurate styling resembling the original Spotify app</li>
        </ul><br/>

        Technical Highlights:<br/>
        <ul>
        <li>Developed using HTML, CSS, and Bootstrap</li>
        <li>Structured with a responsive layout for desktop and mobile</li>
        <li>Focused on static UI design with pixel-perfect accuracy</li>
        </ul>
    `,
    role: `
        Frontend Developer <br/>
        Executed the UI replication:<br/>
        <ul>
        <li>🎨 Designed the interface using HTML & CSS</li>
        <li>🧩 Built components like navbar, playlists, and artist sections</li>
        <li>📱 Ensured responsiveness for various devices</li>
        <li>⚡ Optimized styling for performance and usability</li>
        </ul>
    `,
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    thumbnail: '/projects/thumbnail/spotify1.png',
    longThumbnail: '/projects/long/spotify1.png',
    images: [
        '/projects/images/spotify1.png',
        '/projects/images/spotify2.png',
        '/projects/images/spotify3.png',
    ],
}

    
];

export const MY_EXPERIENCE = [
    {
        title: 'Cloud Infra Intern',
        company: 'Celebal Technology',
        duration: 'May 2024 - Aug 2025',
    },
    {
        title: 'Mobile App Developer using Flutter',
        company: 'Learn and Build',
        duration: 'May 2023 - July 2023',
    },
];
