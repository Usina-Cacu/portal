import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Logo from '/logocacu.png'

export default function Header() {
    return (
        <div className="flex flex-row items-center justify-center p-1 bg-[#43846d] bg-opacity-15 text-white">
            <NavigationMenu>
                <NavigationMenuList className='gap-3'>
                    <img src={Logo} className="w-12 h-11" alt={Logo} />
                    <NavigationMenuItem className="text-3xl font-sans font-semibold">Portal de Sistemas</NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}