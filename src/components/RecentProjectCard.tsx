import { Folder, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecentProjectCard() {
  return (
    <Card className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-card-foreground flex items-center gap-2">
            <Folder className="h-5 w-5 text-primary" />
            Recente Project
          </CardTitle>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            Ativo
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Atualizado há 2 horas</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">5 membros da equipe</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-medium text-card-foreground">Sistema de Gestão MANDALA</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Desenvolvimento de plataforma completa para gestão de projetos e controle de tempo, 
            incluindo funcionalidades de pesquisa de satisfação e relatórios avançados.
          </p>
        </div>
        
        <div className="pt-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Progresso</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mt-1">
            <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}