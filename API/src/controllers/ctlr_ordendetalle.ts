import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO OrdenDetalle set ?', [req.body]);
        res.json({ text: 'Creando OrdenDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const OrdenDetalles = await pool.query('SELECT * FROM OrdenDetalle');
        res.json(OrdenDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const OrdenDetalle = await pool.query('SELECT * FROM OrdenDetalle WHERE IDOrdenDetalle = ?', [id]);
        if (OrdenDetalle.length > 0) {
            return res.json(OrdenDetalle[0]);
        }
        res.status(404).json({ text: "OrdenDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE OrdenDetalle set ? WHERE IDOrdenDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando OrdenDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM OrdenDetalle WHERE IDOrdenDetalle=?', [id]);
        res.json({ message: 'Eliminando OrdenDetalle ' + [id] });
    }

}
const OrdenDetalle = new Controlador();
export default OrdenDetalle;