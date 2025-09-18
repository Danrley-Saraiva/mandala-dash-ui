import { Layout } from "@/components/Layout";
import { SearchInput } from "@/components/SearchInput";
import { RecentProjectCard } from "@/components/RecentProjectCard";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bem-vindo ao MANDALA
          </h1>
          <p className="text-muted-foreground text-lg">
            Gerencie seus projetos e tarefas com eficiência
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-10 flex justify-center">
          <SearchInput />
        </div>

        {/* Recent Project Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Projetos Recentes
          </h2>
          <RecentProjectCard />
        </div>

        {/* Additional Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth border-0">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Tarefas Pendentes</h3>
            <p className="text-3xl font-bold text-primary mb-1">12</p>
            <p className="text-sm text-muted-foreground">tarefas aguardando</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth border-0">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Horas Trabalhadas</h3>
            <p className="text-3xl font-bold text-primary mb-1">38.5h</p>
            <p className="text-sm text-muted-foreground">esta semana</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth border-0">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Satisfação</h3>
            <p className="text-3xl font-bold text-primary mb-1">4.8</p>
            <p className="text-sm text-muted-foreground">avaliação média</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
