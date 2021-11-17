import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CompraDetalle set ?', [req.body]);
        res.json({ text: 'Creando CompraDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CompraDetalles = await pool.query('SELECT * FROM CompraDetalle');
        res.json(CompraDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CompraDetalle = await pool.query('SELECT * FROM CompraDetalle WHERE IDCompraDetalle = ?', [id]);
        if (CompraDetalle.length > 0) {
            return res.json(CompraDetalle[0]);
        }
        res.status(404).json({ text: "CompraDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CompraDetalle set ? WHERE IDCompraDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando CompraDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CompraDetalle WHERE IDCompraDetalle=?', [id]);
        res.json({ message: 'Eliminando CompraDetalle ' + [id] });
    }

}
const CompraDetalle = new Controlador();
export default CompraDetalle;