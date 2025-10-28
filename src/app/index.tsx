import { AppRouter } from "@/app/router.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
        <Toaster />
      </ThemeProvider>
    </>
  );
};
