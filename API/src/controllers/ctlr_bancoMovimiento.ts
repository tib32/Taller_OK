import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO bancoMovimiento set ?', [req.body]);
        res.json({ text: 'Creando bancoMovimiento' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const bancoMovimientos = await pool.query('SELECT * FROM bancoMovimiento');
        res.json(bancoMovimientos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const bancoMovimiento = await pool.query('SELECT * FROM bancoMovimiento WHERE IDbancoMovimiento = ?', [id]);
        if (bancoMovimiento.length > 0) {
            return res.json(bancoMovimiento[0]);
        }
        res.status(404).json({ text: "bancoMovimiento no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE bancoMovimiento set ? WHERE IDbancoMovimiento=?', [req.body, id]);
        res.json({ message: 'actualizando bancoMovimiento ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM bancoMovimiento WHERE IDbancoMovimiento=?', [id]);
        res.json({ message: 'Eliminando bancoMovimiento ' + [id] });
    }

}
const bancoMovimiento = new Controlador();
export default bancoMovimiento;