import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TimeRecord } from "@/pages/HoraTaskPonto";

interface AddTimeRecordDialogProps {
  open: boolean;
  onClose: () => void;
  onAddRecord: (record: Omit<TimeRecord, 'id'>) => void;
  taskName: string;
}

export function AddTimeRecordDialog({ open, onClose, onAddRecord, taskName }: AddTimeRecordDialogProps) {
  const [usuario, setUsuario] = useState("");
  const [horaInicial, setHoraInicial] = useState("");
  const [horaFinal, setHoraFinal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuario.trim() && horaInicial && horaFinal) {
      onAddRecord({
        usuario: usuario.trim(),
        horaInicial,
        horaFinal
      });
      setUsuario("");
      setHoraInicial("");
      setHoraFinal("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Registro de Hora</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Tarefa: {taskName}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário Responsável</Label>
            <Input
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Nome do usuário..."
              autoFocus
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hora-inicial">Hora Inicial</Label>
              <Input
                id="hora-inicial"
                type="time"
                value={horaInicial}
                onChange={(e) => setHoraInicial(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hora-final">Hora Final</Label>
              <Input
                id="hora-final"
                type="time"
                value={horaFinal}
                onChange={(e) => setHoraFinal(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={!usuario.trim() || !horaInicial || !horaFinal}
              className="flex-1 bg-gradient-primary text-white hover:opacity-90"
            >
              Adicionar Registro
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}