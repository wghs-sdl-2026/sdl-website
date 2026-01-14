import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { paths } from "@/config/paths.ts";
import { NavLink } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import ToggleThemeButton from "@/components/theme/toggle-theme.tsx";

export const NavSidebar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="hidden max-md:block">
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>{/* TODO: Icon */}</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="home">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.home.getHref()}>
                      {t("navbar.home")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="works">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.articleSearch.getHref()}>
                      {t("navbar.works")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="resources">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.resources.getHref()}>
                      {t("navbar.resources")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="about">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.about.getHref()}>
                      {t("navbar.about_outcome_exhibition")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem key="staff_list">
                  <SidebarMenuButton asChild>
                    <NavLink to={paths.root.staff.getHref()}>
                      {t("navbar.staff_list")}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="w-full flex justify-between align-middle gap-2">
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
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
