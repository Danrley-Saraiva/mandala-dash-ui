import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp, Plus } from "lucide-react";

const PesquisaSatisfacao = () => {
  const surveys = [
    {
      id: "1",
      titulo: "Satisfação do Cliente - Q4 2024",
      status: "Ativo",
      respostas: 45,
      avaliacao: 4.7,
      dataInicio: "15/12/2024"
    },
    {
      id: "2", 
      titulo: "Feedback Sistema MANDALA",
      status: "Concluído",
      respostas: 128,
      avaliacao: 4.3,
      dataInicio: "01/12/2024"
    },
    {
      id: "3",
      titulo: "Experiência do Usuário",
      status: "Rascunho",
      respostas: 0,
      avaliacao: 0,
      dataInicio: "20/12/2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Concluído":
        return "bg-blue-100 text-blue-800";
      case "Rascunho":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Pesquisa de Satisfação
            </h1>
            <p className="text-muted-foreground text-lg">
              Colete feedback e meça a satisfação dos seus clientes
            </p>
          </div>
          <Button className="bg-gradient-primary text-white hover:opacity-90 transition-smooth">
            <Plus className="h-4 w-4 mr-2" />
            Nova Pesquisa
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total de Pesquisas</p>
                  <p className="text-2xl font-bold text-primary">3</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Respostas Totais</p>
                  <p className="text-2xl font-bold text-primary">173</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Satisfação Média</p>
                  <p className="text-2xl font-bold text-primary">4.5</p>
                </div>
                <Star className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Surveys List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Suas Pesquisas
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {surveys.map((survey) => (
              <Card key={survey.id} className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-card-foreground">
                      {survey.titulo}
                    </CardTitle>
                    <Badge className={getStatusColor(survey.status)}>
                      {survey.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{survey.respostas}</p>
                      <p className="text-sm text-muted-foreground">Respostas</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <p className="text-2xl font-bold text-primary">
                          {survey.avaliacao > 0 ? survey.avaliacao : "--"}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">Avaliação</p>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Criado em: {survey.dataInicio}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver Resultados
                    </Button>
                    <Button variant="secondary" size="sm" className="flex-1">
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PesquisaSatisfacao;