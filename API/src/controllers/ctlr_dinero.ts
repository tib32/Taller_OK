import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Dinero set ?', [req.body]);
        res.json({ text: 'Creando Dinero' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Dineros = await pool.query('SELECT * FROM Dinero');
        res.json(Dineros);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Dinero = await pool.query('SELECT * FROM Dinero WHERE IDDinero = ?', [id]);
        if (Dinero.length > 0) {
            return res.json(Dinero[0]);
        }
        res.status(404).json({ text: "Dinero no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Dinero set ? WHERE IDDinero=?', [req.body, id]);
        res.json({ message: 'actualizando Dinero ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Dinero WHERE IDDinero=?', [id]);
        res.json({ message: 'Eliminando Dinero ' + [id] });
    }

}
const Dinero = new Controlador();
export default Dinero;