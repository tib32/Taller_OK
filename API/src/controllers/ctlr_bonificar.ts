import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Bonificar set ?', [req.body]);
        res.json({ text: 'Creando Bonificar' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Bonificars = await pool.query('SELECT * FROM Bonificar');
        res.json(Bonificars);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Bonificar = await pool.query('SELECT * FROM Bonificar WHERE IDBonificar = ?', [id]);
        if (Bonificar.length > 0) {
            return res.json(Bonificar[0]);
        }
        res.status(404).json({ text: "Bonificar no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Bonificar set ? WHERE IDBonificar=?', [req.body, id]);
        res.json({ message: 'actualizando Bonificar ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Bonificar WHERE IDBonificar=?', [id]);
        res.json({ message: 'Eliminando Bonificar ' + [id] });
    }

}
const Bonificar = new Controlador();
export default Bonificar;