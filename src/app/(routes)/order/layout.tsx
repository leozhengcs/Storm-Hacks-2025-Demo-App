import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Order Online",
    description: "Skip the line by ordering ahead!"
}

export default function OrderLayout({ children }: { children: React.ReactNode }) {
    return(<>{children}</>)
}