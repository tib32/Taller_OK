import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Tercero set ?', [req.body]);
        res.json({ text: 'Creando Tercero' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Terceros = await pool.query('SELECT * FROM Tercero');
        res.json(Terceros);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Tercero = await pool.query('SELECT * FROM Tercero WHERE IDTercero = ?', [id]);
        if (Tercero.length > 0) {
            return res.json(Tercero[0]);
        }
        res.status(404).json({ text: "Tercero no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Tercero set ? WHERE IDTercero=?', [req.body, id]);
        res.json({ message: 'actualizando Tercero ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Tercero WHERE IDTercero=?', [id]);
        res.json({ message: 'Eliminando Tercero ' + [id] });
    }

}
const Tercero = new Controlador();
export default Tercero;