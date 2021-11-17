import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Orden set ?', [req.body]);
        res.json({ text: 'Creando Orden' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Ordens = await pool.query('SELECT * FROM Orden');
        res.json(Ordens);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Orden = await pool.query('SELECT * FROM Orden WHERE IDOrden = ?', [id]);
        if (Orden.length > 0) {
            return res.json(Orden[0]);
        }
        res.status(404).json({ text: "Orden no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Orden set ? WHERE IDOrden=?', [req.body, id]);
        res.json({ message: 'actualizando Orden ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Orden WHERE IDOrden=?', [id]);
        res.json({ message: 'Eliminando Orden ' + [id] });
    }

}
const Orden = new Controlador();
export default Orden;