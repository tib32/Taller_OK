import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO BancoOperacion set ?', [req.body]);
        res.json({ text: 'Creando BancoOperacion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const BancoOperacions = await pool.query('SELECT * FROM BancoOperacion');
        res.json(BancoOperacions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const BancoOperacion = await pool.query('SELECT * FROM BancoOperacion WHERE IDBancoOperacion = ?', [id]);
        if (BancoOperacion.length > 0) {
            return res.json(BancoOperacion[0]);
        }
        res.status(404).json({ text: "BancoOperacion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE BancoOperacion set ? WHERE IDBancoOperacion=?', [req.body, id]);
        res.json({ message: 'actualizando BancoOperacion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM BancoOperacion WHERE IDBancoOperacion=?', [id]);
        res.json({ message: 'Eliminando BancoOperacion ' + [id] });
    }

}
const BancoOperacion = new Controlador();
export default BancoOperacion;