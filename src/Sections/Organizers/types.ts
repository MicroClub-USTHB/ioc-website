export interface Organizer {
  title: string
  description: string
  links?: OrganizerLinks[]
  image: {
    link: string
    bg: 'light' | 'dark'
  }
  orientation: 'left' | 'right' | 'top' | 'bottom' // top and bottom aren't implemented but they exist as types for future-proofing, please don't remove
}

interface OrganizerLinks {
  type: 'instagram' | 'linkedin' | 'facebook' | 'web'
  icon?: string
  link: string
}