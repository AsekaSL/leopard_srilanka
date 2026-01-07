/**
 * Theme Configuration
 * 
 * Central color palette for the application.
 * All colors are defined here to replace global CSS variables.
 */

export const colors = {
  // Primary brand color
  primary: '#ecb213',
  primaryHover: '#d99a1e',
  primaryLight: 'rgba(236, 178, 19, 0.2)',
  primaryLighter: 'rgba(236, 178, 19, 0.1)',
  
  // Background colors
  backgroundLight: '#f8f7f6',
  backgroundDark: '#181611',
  backgroundDarkSecondary: '#12100d',
  backgroundDarkTertiary: '#221c10',
  
  // Surface colors
  surfaceDark: '#27241c',
  surfaceDarkAlt: '#2a271f',
  surfaceDarkHover: '#393428',
  
  // Border colors
  borderDark: '#393428',
  borderDarkLight: '#544b3b',
  
  // Text colors
  textDark: '#181611',
  textLight: '#ffffff',
  textGray: '#d1d5db',
  textGrayDark: '#9ca3af',
  
  // Accent colors
  yellow: '#fef08a',
  yellowDark: '#fde047',
} as const;

/**
 * Tailwind CSS utility classes for colors
 * Use these classes in className attributes
 */
export const tw = {
  // Primary backgrounds
  bgPrimary: 'bg-[#ecb213]',
  bgPrimaryHover: 'hover:bg-[#d99a1e]',
  
  // Text colors
  textPrimary: 'text-[#ecb213]',
  textDark: 'text-[#181611]',
  textLight: 'text-white',
  textGray: 'text-gray-300',
  
  // Background colors
  bgBackgroundLight: 'bg-[#f8f7f6]',
  bgBackgroundDark: 'bg-[#181611]',
  bgDark: 'bg-[#181611]',
  bgSurfaceDark: 'bg-[#27241c]',
  
  // Border colors
  borderDark: 'border-[#393428]',
  borderPrimary: 'border-[#ecb213]',
  
  // Hover states
  hoverTextPrimary: 'hover:text-[#ecb213]',
  hoverTextDark: 'hover:text-[#181611]',
  hoverBorderPrimary: 'hover:border-[#ecb213]',
  
  // Selection colors
  selectionBgPrimary: 'selection:bg-[#ecb213]',
  selectionTextDark: 'selection:text-[#181611]',
} as const;

export default colors;
