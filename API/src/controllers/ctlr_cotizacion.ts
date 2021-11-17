import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Cotizacion set ?', [req.body]);
        res.json({ text: 'Creando Cotizacion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Cotizacions = await pool.query('SELECT * FROM Cotizacion');
        res.json(Cotizacions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Cotizacion = await pool.query('SELECT * FROM Cotizacion WHERE IDCotizacion = ?', [id]);
        if (Cotizacion.length > 0) {
            return res.json(Cotizacion[0]);
        }
        res.status(404).json({ text: "Cotizacion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Cotizacion set ? WHERE IDCotizacion=?', [req.body, id]);
        res.json({ message: 'actualizando Cotizacion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Cotizacion WHERE IDCotizacion=?', [id]);
        res.json({ message: 'Eliminando Cotizacion ' + [id] });
    }

}
const Cotizacion = new Controlador();
export default Cotizacion;