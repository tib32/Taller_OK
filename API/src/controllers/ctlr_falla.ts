import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Falla set ?', [req.body]);
        res.json({ text: 'Creando Falla' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Fallas = await pool.query('SELECT * FROM Falla');
        res.json(Fallas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Falla = await pool.query('SELECT * FROM Falla WHERE IDFalla = ?', [id]);
        if (Falla.length > 0) {
            return res.json(Falla[0]);
        }
        res.status(404).json({ text: "Falla no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Falla set ? WHERE IDFalla=?', [req.body, id]);
        res.json({ message: 'actualizando Falla ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Falla WHERE IDFalla=?', [id]);
        res.json({ message: 'Eliminando Falla ' + [id] });
    }

}
const Falla = new Controlador();
export default Falla;