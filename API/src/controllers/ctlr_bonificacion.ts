import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Bonificacion set ?', [req.body]);
        res.json({ text: 'Creando Bonificacion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Bonificacions = await pool.query('SELECT * FROM Bonificacion');
        res.json(Bonificacions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Bonificacion = await pool.query('SELECT * FROM Bonificacion WHERE IDBonificacion = ?', [id]);
        if (Bonificacion.length > 0) {
            return res.json(Bonificacion[0]);
        }
        res.status(404).json({ text: "Bonificacion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Bonificacion set ? WHERE IDBonificacion=?', [req.body, id]);
        res.json({ message: 'actualizando Bonificacion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Bonificacion WHERE IDBonificacion=?', [id]);
        res.json({ message: 'Eliminando Bonificacion ' + [id] });
    }

}
const Bonificacion = new Controlador();
export default Bonificacion;