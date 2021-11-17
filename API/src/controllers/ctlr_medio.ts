import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Medio set ?', [req.body]);
        res.json({ text: 'Creando Medio' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Medios = await pool.query('SELECT * FROM Medio');
        res.json(Medios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Medio = await pool.query('SELECT * FROM Medio WHERE IDMedio = ?', [id]);
        if (Medio.length > 0) {
            return res.json(Medio[0]);
        }
        res.status(404).json({ text: "Medio no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Medio set ? WHERE IDMedio=?', [req.body, id]);
        res.json({ message: 'actualizando Medio ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Medio WHERE IDMedio=?', [id]);
        res.json({ message: 'Eliminando Medio ' + [id] });
    }

}
const Medio = new Controlador();
export default Medio;