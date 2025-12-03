import {
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
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
    <div className="w-full flex flex-row justify-between p-3">
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
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>
              {t("navbar.outcome_exhibition")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-full h-full grid grid-cols-3 mb-2 gap-2 break-keep">
                <li>
                  <div className="mx-2 mt-2">
                    <p className="text-muted-foreground text-sm leading-none">
                      {t("navbar.outcome_exhibition.exhibition")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-span-2 mx-4 mt-2">
                    <p className="text-muted-foreground text-sm leading-none">
                      {t("navbar.outcome_exhibition.all_works")}
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="w-full grid grid-flow-col grid-rows-2 gap-2">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.presentation")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.showcase")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.poster")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.medicine")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.biology")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.engineering")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.chemistry")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.society")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.outcome_exhibition.politics_and_economics")}
                    </NavLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.home.getHref()}>
                {t("navbar.about_outcome_exhibition")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink to={paths.root.home.getHref()}>
                {t("navbar.staff_list")}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex align-middle gap-2">
        {/* TODO language selection */}
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
