import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ComboDetalle set ?', [req.body]);
        res.json({ text: 'Creando ComboDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ComboDetalles = await pool.query('SELECT * FROM ComboDetalle');
        res.json(ComboDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ComboDetalle = await pool.query('SELECT * FROM ComboDetalle WHERE IDComboDetalle = ?', [id]);
        if (ComboDetalle.length > 0) {
            return res.json(ComboDetalle[0]);
        }
        res.status(404).json({ text: "ComboDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ComboDetalle set ? WHERE IDComboDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando ComboDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ComboDetalle WHERE IDComboDetalle=?', [id]);
        res.json({ message: 'Eliminando ComboDetalle ' + [id] });
    }

}
const ComboDetalle = new Controlador();
export default ComboDetalle;