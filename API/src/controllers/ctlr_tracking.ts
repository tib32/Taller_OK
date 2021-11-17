import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Tracking set ?', [req.body]);
        res.json({ text: 'Creando Tracking' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Trackings = await pool.query('SELECT * FROM Tracking');
        res.json(Trackings);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Tracking = await pool.query('SELECT * FROM Tracking WHERE IDTracking = ?', [id]);
        if (Tracking.length > 0) {
            return res.json(Tracking[0]);
        }
        res.status(404).json({ text: "Tracking no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Tracking set ? WHERE IDTracking=?', [req.body, id]);
        res.json({ message: 'actualizando Tracking ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Tracking WHERE IDTracking=?', [id]);
        res.json({ message: 'Eliminando Tracking ' + [id] });
    }

}
const Tracking = new Controlador();
export default Tracking;