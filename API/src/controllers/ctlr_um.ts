import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO um set ?', [req.body]);
        res.json({ text: 'Creando Unidad de medida' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ums = await pool.query('SELECT * FROM um');
        res.json(ums);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const um = await pool.query('SELECT * FROM um WHERE IDUM = ?', [id]);
        if (um.length > 0) {
            return res.json(um[0]);
        }
        res.status(404).json({ text: "Unidad de medida no encontrada" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE um set ? WHERE IDUM=?', [req.body, id]);
        res.json({ message: 'actualizando Unidad de medida ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM um WHERE IDUM=?', [id]);
        res.json({ message: 'Eliminando Unidad de medida ' + [id] });
    }
}
const um = new Controlador();
export default um;