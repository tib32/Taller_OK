import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VentaDetalle set ?', [req.body]);
        res.json({ text: 'Creando VentaDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VentaDetalles = await pool.query('SELECT * FROM VentaDetalle');
        res.json(VentaDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VentaDetalle = await pool.query('SELECT * FROM VentaDetalle WHERE IDVentaDetalle = ?', [id]);
        if (VentaDetalle.length > 0) {
            return res.json(VentaDetalle[0]);
        }
        res.status(404).json({ text: "VentaDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VentaDetalle set ? WHERE IDVentaDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando VentaDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VentaDetalle WHERE IDVentaDetalle=?', [id]);
        res.json({ message: 'Eliminando VentaDetalle ' + [id] });
    }

}
const VentaDetalle = new Controlador();
export default VentaDetalle;