import { SidebarTrigger } from "./ui/sidebar";

export const AppHeader = () => {
    return (
        <header className="flex shrink-0 h-14 items-center gap-2 border-b px-4 bg-background">
            <SidebarTrigger />   
        </header>
    )
}