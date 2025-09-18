import { Layout } from "@/components/Layout";
import { TaskCard } from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddTaskDialog } from "@/components/AddTaskDialog";

export interface TimeRecord {
  id: string;
  usuario: string;
  horaInicial: string;
  horaFinal: string;
}

export interface Task {
  id: string;
  nome: string;
  registros: TimeRecord[];
}

const HoraTaskPonto = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      nome: "Desenvolvimento do Sistema MANDALA",
      registros: [
        {
          id: "1",
          usuario: "João Silva",
          horaInicial: "09:00",
          horaFinal: "12:00"
        },
        {
          id: "2", 
          usuario: "Maria Santos",
          horaInicial: "14:00",
          horaFinal: "17:30"
        }
      ]
    },
    {
      id: "2",
      nome: "Pesquisa de Satisfação do Cliente",
      registros: [
        {
          id: "3",
          usuario: "Pedro Costa",
          horaInicial: "08:30",
          horaFinal: "11:00"
        }
      ]
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddTask = (taskName: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      nome: taskName,
      registros: []
    };
    setTasks([...tasks, newTask]);
  };

  const handleAddTimeRecord = (taskId: string, record: Omit<TimeRecord, 'id'>) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          registros: [...task.registros, { ...record, id: Date.now().toString() }]
        };
      }
      return task;
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Hora Task x Ponto
            </h1>
            <p className="text-muted-foreground text-lg">
              Gerencie suas tarefas e controle de horas
            </p>
          </div>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-gradient-primary text-white hover:opacity-90 transition-smooth"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Tarefa
          </Button>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onAddTimeRecord={handleAddTimeRecord}
            />
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              Nenhuma tarefa criada ainda
            </p>
            <Button 
              onClick={() => setIsDialogOpen(true)}
              variant="outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              Criar Primeira Tarefa
            </Button>
          </div>
        )}
      </div>

      <AddTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAddTask={handleAddTask}
      />
    </Layout>
  );
};

export default HoraTaskPonto;