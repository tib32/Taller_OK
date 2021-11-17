import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CotizacionDetalle set ?', [req.body]);
        res.json({ text: 'Creando CotizacionDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CotizacionDetalles = await pool.query('SELECT * FROM CotizacionDetalle');
        res.json(CotizacionDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CotizacionDetalle = await pool.query('SELECT * FROM CotizacionDetalle WHERE IDCotizacionDetalle = ?', [id]);
        if (CotizacionDetalle.length > 0) {
            return res.json(CotizacionDetalle[0]);
        }
        res.status(404).json({ text: "CotizacionDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CotizacionDetalle set ? WHERE IDCotizacionDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando CotizacionDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CotizacionDetalle WHERE IDCotizacionDetalle=?', [id]);
        res.json({ message: 'Eliminando CotizacionDetalle ' + [id] });
    }

}
const CotizacionDetalle = new Controlador();
export default CotizacionDetalle;