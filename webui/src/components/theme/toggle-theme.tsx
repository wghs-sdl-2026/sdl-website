import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/components/theme/theme-provider.tsx";
import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" && (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      )}
      {theme === "dark" && (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      )}
    </Button>
  );
};

export default ToggleThemeButton;
