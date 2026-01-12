import {
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";
import { NavLink } from "react-router";
import { paths } from "@/config/paths.ts";
import { Button } from "@/components/ui/button.tsx";
import ToggleThemeButton from "@/components/theme/toggle-theme.tsx";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="hidden md:flex w-full flex-row justify-between p-3">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.home.getHref()}>
                {t("navbar.home")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.articleSearch.getHref()}>
                {t("navbar.outcome_exhibition")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.resources.getHref()}>
                {t("navbar.resources")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.about.getHref()}>
                {t("navbar.about_outcome_exhibition")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.staff.getHref()}>
                {t("navbar.staff_list")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex align-middle gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Globe />
              <p>Language</p>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onSelect={() => {
                  (async () => await i18n.changeLanguage("zh-Hant"))();
                }}
              >
                繁體中文
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  (async () => await i18n.changeLanguage("en"))();
                }}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  (async () => await i18n.changeLanguage("ja"))();
                }}
              >
                日本語
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <ToggleThemeButton />
      </div>
    </div>
  );
};
