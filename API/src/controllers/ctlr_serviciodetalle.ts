import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ServicioDetalle set ?', [req.body]);
        res.json({ text: 'Creando ServicioDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ServicioDetalles = await pool.query('SELECT * FROM ServicioDetalle');
        res.json(ServicioDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ServicioDetalle = await pool.query('SELECT * FROM ServicioDetalle WHERE IDServicioDetalle = ?', [id]);
        if (ServicioDetalle.length > 0) {
            return res.json(ServicioDetalle[0]);
        }
        res.status(404).json({ text: "ServicioDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ServicioDetalle set ? WHERE IDServicioDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando ServicioDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ServicioDetalle WHERE IDServicioDetalle=?', [id]);
        res.json({ message: 'Eliminando ServicioDetalle ' + [id] });
    }

}
const ServicioDetalle = new Controlador();
export default ServicioDetalle;