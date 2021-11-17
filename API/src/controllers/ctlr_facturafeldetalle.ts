import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO FacturaFelDetalle set ?', [req.body]);
        res.json({ text: 'Creando FacturaFelDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const FacturaFelDetalles = await pool.query('SELECT * FROM FacturaFelDetalle');
        res.json(FacturaFelDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const FacturaFelDetalle = await pool.query('SELECT * FROM FacturaFelDetalle WHERE IDFacturaFelDetalle = ?', [id]);
        if (FacturaFelDetalle.length > 0) {
            return res.json(FacturaFelDetalle[0]);
        }
        res.status(404).json({ text: "FacturaFelDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE FacturaFelDetalle set ? WHERE IDFacturaFelDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando FacturaFelDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM FacturaFelDetalle WHERE IDFacturaFelDetalle=?', [id]);
        res.json({ message: 'Eliminando FacturaFelDetalle ' + [id] });
    }

}
const FacturaFelDetalle = new Controlador();
export default FacturaFelDetalle;