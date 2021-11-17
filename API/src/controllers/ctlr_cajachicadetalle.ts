import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CajaChicaDetalle set ?', [req.body]);
        res.json({ text: 'Creando CajaChicaDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CajaChicaDetalles = await pool.query('SELECT * FROM CajaChicaDetalle');
        res.json(CajaChicaDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CajaChicaDetalle = await pool.query('SELECT * FROM CajaChicaDetalle WHERE IDCajaChicaDetalle = ?', [id]);
        if (CajaChicaDetalle.length > 0) {
            return res.json(CajaChicaDetalle[0]);
        }
        res.status(404).json({ text: "CajaChicaDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CajaChicaDetalle set ? WHERE IDCajaChicaDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando CajaChicaDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CajaChicaDetalle WHERE IDCajaChicaDetalle=?', [id]);
        res.json({ message: 'Eliminando CajaChicaDetalle ' + [id] });
    }

}
const CajaChicaDetalle = new Controlador();
export default CajaChicaDetalle;