"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/about" title="AxlDev">
                  <h2 className="text-red-800" > Dale click información importante</h2>
              </ListItem>
              <ListItem href="#" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="#" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales.
              </ListItem>
                <ListItem href="#" title="Accesorios">
                Productos complementarios como tazas, molinos, prensas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleAlertIcon />Backlog</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleDashedIcon />To Do</Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><CircleCheckIcon />Done</Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#">Accesorios</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café grano",
    href: "/category/grano",
    description:
      "Granos de café enteros que requieren ser molidos antes de su preparación. Ideal para los amantes del café o verdaderos cafeteros que buscan disfrutar del máximo aroma y sabor recién molido.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "Café en forma de polvo listo para ser utilizado en diferentes métodos de preparación, como la prensa francesa, el café filtrado y la cafetera italiana (moka).",
  },
  {
    title: "Café de cápsula",
    href: "/category/capsula",
    description:
      "Café envasado en cápsulas individuales, ofreciendo conveniencia y consistencia en la preparación, representa una alternativa rápida y práctica para obtener una taza perfecta con solo presionar un botón. ",
  },

]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}

