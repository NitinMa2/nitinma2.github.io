export interface Project {
  id: string
  title: string
  description: string
  image: string
  url?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'cakemyday',
    title: 'Cake My Day',
    description: 'A colourful local bakery shop with a dash of spice.',
    image: '/img/cakemyday.png',
    url: 'https://nitinma2.github.io/CakeMyDay/',
    tags: ['web', 'bakery'],
  },
  {
    id: 'sleepish',
    title: 'Sleepish',
    description: 'Simple, yet promising sleep-promoting start-up.',
    image: '/img/sleepish.png',
    url: 'https://nitinma2.github.io/Sleepish/',
    tags: ['web', 'start-up'],
  },
  {
    id: 'huddle',
    title: 'Huddle Landing Page',
    description: 'Clean look for a tech community start-up.',
    image: '/img/huddle.png',
    url: 'https://nitinma2.github.io/HuddleLandingPage/',
    tags: ['web', 'start-up'],
  },
  {
    id: 'dexter',
    title: 'Dexter',
    description: "A doggo's personal website.",
    image: '/img/dexter.png',
    url: 'https://nitinma2.github.io/Dexter/',
    tags: ['web', 'personal'],
  },
  {
    id: 'tostainteriors',
    title: 'Tosta Interiors',
    description: 'A classy interior design business.',
    image: '/img/tostainteriors.png',
    url: 'https://nitinma2.github.io/TostaInteriors/',
    tags: ['web', 'interior design'],
  },
  {
    id: 'livewire',
    title: 'LiveWire',
    description: 'A minimalist landing page for an event-planning start-up.',
    image: '/img/livewire.png',
    url: 'https://nitinma2.github.io/LiveWire/',
    tags: ['web', 'start-up'],
  },
]
