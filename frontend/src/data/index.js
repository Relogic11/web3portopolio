// New organized data structure
// Import and re-export all data modules for easier maintenance

export { personalInfo } from './modules/personal';
export { skills } from './modules/skills';

// Temporary: Keep importing from old mock.js for other data
// TODO: Move these to separate modules too
export { 
  projects,
  team,
  experience,
  testimonials,
  services,
  heroSlides
} from './mock';
