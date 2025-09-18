import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Plus } from "lucide-react";
import { Task, TimeRecord } from "@/pages/HoraTaskPonto";
import { useState } from "react";
import { AddTimeRecordDialog } from "./AddTimeRecordDialog";

interface TaskCardProps {
  task: Task;
  onAddTimeRecord: (taskId: string, record: Omit<TimeRecord, 'id'>) => void;
}

export function TaskCard({ task, onAddTimeRecord }: TaskCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddRecord = (record: Omit<TimeRecord, 'id'>) => {
    onAddTimeRecord(task.id, record);
    setIsDialogOpen(false);
  };

  const calculateTotalHours = () => {
    return task.registros.reduce((total, record) => {
      const [startHour, startMinute] = record.horaInicial.split(':').map(Number);
      const [endHour, endMinute] = record.horaFinal.split(':').map(Number);
      
      const startInMinutes = startHour * 60 + startMinute;
      const endInMinutes = endHour * 60 + endMinute;
      
      return total + (endInMinutes - startInMinutes) / 60;
    }, 0);
  };

  return (
    <Card className="shadow-card hover:shadow-elegant transition-smooth rounded-2xl border-0 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-semibold text-card-foreground">
            {task.nome}
          </CardTitle>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total de Horas</p>
            <p className="text-lg font-bold text-primary">
              {calculateTotalHours().toFixed(1)}h
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-card-foreground">Registros de Horas</h4>
          <Button 
            size="sm"
            onClick={() => setIsDialogOpen(true)}
            className="bg-gradient-primary text-white hover:opacity-90 transition-smooth"
          >
            <Plus className="h-3 w-3 mr-1" />
            Adicionar
          </Button>
        </div>
        
        {task.registros.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>Nenhum registro de hora ainda</p>
            <p className="text-sm">Clique em "Adicionar" para começar</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {task.registros.map((record) => (
              <div 
                key={record.id}
                className="bg-muted/50 rounded-xl p-3 border border-border/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm text-card-foreground">
                      {record.usuario}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{record.horaInicial} - {record.horaFinal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      
      <AddTimeRecordDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAddRecord={handleAddRecord}
        taskName={task.nome}
      />
    </Card>
  );
}