import { ReactNode } from "react";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Upload,
  TrendingUp,
  ShoppingCart,
  Package,
  FileText,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Data Upload", href: "/upload", icon: Upload },
  { name: "Forecast", href: "/forecast", icon: TrendingUp },
  { name: "Procurement", href: "/procurement", icon: ShoppingCart },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Reports", href: "/reports", icon: FileText },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PRISMA</h1>
              <p className="text-xs text-muted-foreground">Supply Chain AI</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              activeClassName="bg-accent text-accent-foreground font-medium"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Welcome back, Riya</h2>
              <p className="text-sm text-muted-foreground">PowerGrid Infrastructure Pvt. Ltd.</p>
            </div>
            <button className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
              RP
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>

      {/* AI Assistant Toggle - Floating Button */}
      <NavLink
        to="/assistant"
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg",
          "bg-primary text-primary-foreground",
          "flex items-center justify-center",
          "hover:scale-110 transition-transform"
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </NavLink>
    </div>
  );
};

export default DashboardLayout;
