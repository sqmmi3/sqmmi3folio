export interface Project {
  id: number
  title: string
  category: 'Engineering' | 'Hardware' | 'Studio' | 'Creator'
  description: string
  tags: string[]
  demoLink?: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Juk3d Music Box',
    category: 'Hardware',
    description:
      'Real-time music box built on Raspberry PI and ESP32, bridging physical sound hardware controlled with mobile interface!',
    tags: ['Java (Sprintboot)', 'React Native', 'Web-sockets', 'Python', 'IoT', 'TypeScript'],
    link: 'https://github.com/sqmmi3/juk3d',
  },
  {
    id: 2,
    title: 'GlacKIT Flow Engine',
    category: 'Engineering',
    description:
      'An easily extendable dynamic flow engine to handle flows that have integrated steps systems to link with other platforms for for example absence management and handling, while I acted throughout the project as SCRUM MASTER!',
    tags: ['Java (Sprinboot)', 'VueJS', 'MongoDB', 'Agile', 'Senior Scrum Master', 'Full-Stack'],
    link: 'https://github.com/sqmmi3/glackit',
  },
  {
    id: 3,
    title: 'Axxess Carpooling',
    category: 'Engineering',
    description:
      'A feature-rich mobile carpooling application to register rides and certain characteristics to it, with a optimised algorithm for optimal route navigation for drivers and passengers to follow!',
    tags: ['Java (Springboot)', 'React Native', 'Junior Developer', 'Styling', 'Full-Stack'],
    link: 'https://github.com/sqmmi3/wpp',
  },
  {
    id: 4,
    title: 'ResQFood Mobile App',
    category: 'Engineering',
    description:
      'Highly functional mobile application designed to rescue food for mainly students living alone by keeping track of expiry dates and receiving notifications on them!',
    tags: [
      'Java (Springboot)',
      'Flutter',
      'Dart',
      'Firebase',
      'Food Management',
      'Real-world Problem',
    ],
    link: 'https://github.com/sqmmi3/resqfood',
  },
  {
    id: 5,
    title: 'RPG Game',
    category: 'Engineering',
    description:
      'Game-Jam-winning pygame game to slay mobs and going further in levels, creating a fun dungeon-vibed game within 4.5 days by designing maps, implementing mechanics, integration sound effects, and more!',
    tags: [
      'Game Jam Winner',
      'Pygame',
      'Dungeon',
      'Sounds Integration',
      'Designing',
      'Quests',
      'Slaying Mobs',
    ],
    link: 'https://github.com/sqmmi3/okapj',
  },
  {
    id: 6,
    title: '3D Minecraft',
    category: 'Engineering',
    description:
      'Engineered a chunk-based terrain system in Unity using procedural generation algorithms and high-quality mesh optimisation and rendering algorithm to ensure high-performance rendering for high-quality shaders such as water and vertex displacements!',
    tags: [
      'Minecraft From Scratch',
      'Mesh Optimisation',
      'Unity',
      'Vertex',
      'Procedural Generation',
      'Perlin Noise',
      'Deferred Rendering',
      'Back Culling',
      'Blinn-Phong Shading',
      'C#',
    ],
    link: 'https://github.com/sqmmi3/3d',
  },
  {
    id: 7,
    title: 'VR Basketball Training Ground',
    category: 'Engineering',
    description:
      'A virtual training ground engineered on Unity to shoot around like in a real-world basketball court with high-qualitative performative shooting algorithms, mainly designed for people who for example are injured and still want to train!',
    tags: [
      'Basketball',
      'VR',
      'Unity',
      'Shooting',
      'Velocity Calculations',
      'Tangential Velocity Calculations',
      'C#',
    ],
    link: 'https://github.com/sqmmi3/basketball',
  },
  {
    id: 8,
    title: 'ShowTime',
    category: 'Engineering',
    description:
      'A multi-user roled system for an event ticket system for users to buy, artists to host, and managers to manage details of events!',
    tags: ['Ticket System', 'Artists', 'Events', 'React', 'TypeScript'],
    link: 'https://github.com/sqmmi3/showtime',
  },
  {
    id: 9,
    title: "2D Puzzle Platformer 'Fractured' AR",
    category: 'Engineering',
    description:
      "A 'Fractured' 2D world game to puzzle your way to the end with complex between-two-world-switching mechanics all within 49 hours during a game jam!",
    tags: [
      'Runner-Up',
      'Godot',
      'C#',
      '2D',
      'AR',
      'Map Design',
      'Figma',
      'Fractured',
      'Sound FX',
      'Mechanics',
    ],
    link: 'https://github.com/Adam03lvl/glitchKIT',
  },
  {
    id: 10,
    title: 'Custom Spotify MP3-Player',
    category: 'Engineering',
    description:
      'Custom-made MP3 player for a fun 6-months surprise for my beloved girlfriend who loves music as much as I do and likes her flowers and pinkness!',
    tags: ['PyQt6', 'Python', 'Spotify Dev', 'Dekstop App', 'In-sync music player'],
    link: 'https://github.com/sqmmi3/mp3player',
  },
  {
    id: 11,
    title: 'Material Studio',
    description:
      'A B2B product configurator featuring dynamic geometry generation, real-time lighting transitions (day/night cycles), and a custom screenshot/spec-sheet export tool',
    category: 'Engineering',
    tags: ['Three.js, TypeScript', 'Vite', 'WebGL'],
    demoLink: '/material-studio/index.html',
    link: 'https://github.com/sqmmi3/materialstudio',
  },
  {
    id: 12,
    title: 'Grid Layout Planner',
    description:
      'A modular spatial planner demonstrating raycasting, 3D math for grid-mapping, collision detection, and continuous "paintbrush" placement',
    category: 'Engineering',
    tags: ['Three.js', 'Raycasting', 'Mathematics', 'Interactive'],
    demoLink: '/grid-planner/index.html',
    link: 'https://github.com/sqmmi3/grid-planner',
  },
]
