import NavigationRail from "@/components/NavigationRail";

export default function LiveLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex">
            <div className="w-1/8">
                <NavigationRail />
            </div>
            <div className="w-7/8 app-content">
                {children}
            </div>
        </main>
    );
}
