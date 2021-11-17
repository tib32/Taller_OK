import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Privilegios set ?', [req.body]);
        res.json({ text: 'Creando Privilegios' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Privilegioss = await pool.query('SELECT * FROM Privilegios');
        res.json(Privilegioss);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Privilegios = await pool.query('SELECT * FROM Privilegios WHERE IDPrivilegios = ?', [id]);
        if (Privilegios.length > 0) {
            return res.json(Privilegios[0]);
        }
        res.status(404).json({ text: "Privilegios no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Privilegios set ? WHERE IDPrivilegios=?', [req.body, id]);
        res.json({ message: 'actualizando Privilegios ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Privilegios WHERE IDPrivilegios=?', [id]);
        res.json({ message: 'Eliminando Privilegios ' + [id] });
    }

}
const Privilegios = new Controlador();
export default Privilegios;