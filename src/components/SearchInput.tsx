import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar projetos, tarefas ou documentos..."
        className="pl-12 pr-4 py-3 h-12 rounded-2xl border-0 bg-card shadow-soft focus:shadow-card focus:ring-primary/20 transition-smooth text-base"
      />
    </div>
  );
}