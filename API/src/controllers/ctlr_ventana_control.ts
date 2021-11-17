import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Ventana_Control set ?', [req.body]);
        res.json({ text: 'Creando Ventana_Control' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Ventana_Controls = await pool.query('SELECT * FROM Ventana_Control');
        res.json(Ventana_Controls);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Ventana_Control = await pool.query('SELECT * FROM Ventana_Control WHERE IDVentana_Control = ?', [id]);
        if (Ventana_Control.length > 0) {
            return res.json(Ventana_Control[0]);
        }
        res.status(404).json({ text: "Ventana_Control no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Ventana_Control set ? WHERE IDVentana_Control=?', [req.body, id]);
        res.json({ message: 'actualizando Ventana_Control ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Ventana_Control WHERE IDVentana_Control=?', [id]);
        res.json({ message: 'Eliminando Ventana_Control ' + [id] });
    }

}
const Ventana_Control = new Controlador();
export default Ventana_Control;