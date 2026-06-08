export interface Profile {
  name: string
  title: string
  bio: string
  responsibility: string
  phone: string
  email: string
}

/**
 * Centralized profile content for Judy's digital name card.
 */
export const profile: Profile = {
  name: 'Judy',
  title: 'Frontend Developer',
  bio: 'Builds reliable product experiences with a calm eye for structure and details.',
  responsibility: '负责通用配置等开发模块，专注于稳定、清晰、可复用的前端实现。',
  phone: '13612151618',
  email: 'judy@keendata.com',
}
