import { atom } from "jotai"

export type TTheme = "LIGHT"|"DARK";

const themeAtom = atom(localStorage.getItem('theme') ?? 'LIGHT')

export const ThemeAtom = atom(
  (get) => get(themeAtom),
  (_, set, theme: TTheme) => {
    set(themeAtom, theme)
    localStorage.setItem('theme', theme)
  },
)