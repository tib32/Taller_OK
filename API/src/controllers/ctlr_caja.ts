import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Caja set ?', [req.body]);
        res.json({ text: 'Creando Caja' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Cajas = await pool.query('SELECT * FROM Caja');
        res.json(Cajas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Caja = await pool.query('SELECT * FROM Caja WHERE IDCaja = ?', [id]);
        if (Caja.length > 0) {
            return res.json(Caja[0]);
        }
        res.status(404).json({ text: "Caja no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Caja set ? WHERE IDCaja=?', [req.body, id]);
        res.json({ message: 'actualizando Caja ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Caja WHERE IDCaja=?', [id]);
        res.json({ message: 'Eliminando Caja ' + [id] });
    }

}
const Caja = new Controlador();
export default Caja;