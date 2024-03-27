import { Poppins, Fira_Code } from "next/font/google";

const poppins_init = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    styles: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-poppins",
})

const fira_code_init = Fira_Code({
    weight: ["400", "500", "600", "700"],
    styles: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-fira-code",
})

export const  FiraCodeFont = fira_code_init.variable
export const PoppinsFont = poppins_init.variable