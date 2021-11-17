import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Globales set ?', [req.body]);
        res.json({ text: 'Creando Globales' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Globaless = await pool.query('SELECT * FROM Globales');
        res.json(Globaless);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Globales = await pool.query('SELECT * FROM Globales WHERE IDGlobales = ?', [id]);
        if (Globales.length > 0) {
            return res.json(Globales[0]);
        }
        res.status(404).json({ text: "Globales no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Globales set ? WHERE IDGlobales=?', [req.body, id]);
        res.json({ message: 'actualizando Globales ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Globales WHERE IDGlobales=?', [id]);
        res.json({ message: 'Eliminando Globales ' + [id] });
    }

}
const Globales = new Controlador();
export default Globales;