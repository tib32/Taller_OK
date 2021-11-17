import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Combo set ?', [req.body]);
        res.json({ text: 'Creando Combo' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Combos = await pool.query('SELECT * FROM Combo');
        res.json(Combos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Combo = await pool.query('SELECT * FROM Combo WHERE IDCombo = ?', [id]);
        if (Combo.length > 0) {
            return res.json(Combo[0]);
        }
        res.status(404).json({ text: "Combo no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Combo set ? WHERE IDCombo=?', [req.body, id]);
        res.json({ message: 'actualizando Combo ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Combo WHERE IDCombo=?', [id]);
        res.json({ message: 'Eliminando Combo ' + [id] });
    }

}
const Combo = new Controlador();
export default Combo;