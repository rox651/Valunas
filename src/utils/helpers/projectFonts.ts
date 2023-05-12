import { Poppins, Sofia, Vibur } from 'next/font/google'
const sofia = Sofia({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const vibur = Vibur({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

/**
 *
 * @returns A Reusable function containing an object with the available fonts for the project
 * Use this instead of exporting and creating the variable anytime you'll need it
 */

export const projectFonts = {
  sofia,
  poppins,
  vibur,
}
