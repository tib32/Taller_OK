import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Lote set ?', [req.body]);
        res.json({ text: 'Creando Lote' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Lotes = await pool.query('SELECT * FROM Lote');
        res.json(Lotes);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Lote = await pool.query('SELECT * FROM Lote WHERE IDLote = ?', [id]);
        if (Lote.length > 0) {
            return res.json(Lote[0]);
        }
        res.status(404).json({ text: "Lote no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Lote set ? WHERE IDLote=?', [req.body, id]);
        res.json({ message: 'actualizando Lote ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Lote WHERE IDLote=?', [id]);
        res.json({ message: 'Eliminando Lote ' + [id] });
    }

}
const Lote = new Controlador();
export default Lote;