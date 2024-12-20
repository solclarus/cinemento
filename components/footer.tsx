import { siteConfig } from "@/config";

export const Footer = () => {
  return (
    <footer className="sticky top-full h-16 px-10 py-6">
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <span>&copy; 2024 {siteConfig.name}</span>
      </div>
    </footer>
  );
};
