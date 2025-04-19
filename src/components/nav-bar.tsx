import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

const NavBar = () => {
    const navItems = [
        { label: "Company & Culture", active: false },
        { label: "Supply", active: true },
        { label: "Opportunities", active: false },
        { label: "Portfolio", active: false },
        { label: "Technicalities", active: false },
        { label: "Estimate & Test", active: false },
    ];
    const actionLinks = [
        { label: "Order an Assessment", color: "text-[#ff3f1e]" },
        { label: "Insights & Content", color: "text-[#4cacff]" },
        { label: "Book a meeting", color: "text-[#dcff1e]" },
    ];
    return (
        <nav className="flex flex-wrap w-full items-center justify-between relative bg-[#101011f8] border-b-[0.5px] border-[#1e1e1ef0]">
            <NavigationMenu className="flex-1">
                <NavigationMenuList className="flex items-start px-0 py-[15px] w-full">
                    {navItems.map((item, index) => (
                        <NavigationMenuItem key={index} className=" text-white">
                            <NavigationMenuTrigger className="bg-[#101011f8] hover:bg-[#101011f8]">{item.label}</NavigationMenuTrigger>
                            <NavigationMenuContent></NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="dm-mono-light">
                {actionLinks.map((link, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-[0.01px] pl-0 pr-5 py-0"
                    >
                        <div className="inline-flex items-center">
                            <div className="inline-flex pl-[28.01px] pr-0 py-0 flex-col items-start">
                                <div className="justify-center inline-flex items-start">
                                    <div className="inline-flex flex-col items-start">
                                        <span
                                            className={`w-fit mt-[-1.00px] font-normal text-[15px] tracking-[0.07px] leading-normal whitespace-nowrap overflow-hidden text-ellipsis ${link.color}`}
                                        >
                                            {link.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default NavBar