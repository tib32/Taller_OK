import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO SalarioAjuste set ?', [req.body]);
        res.json({ text: 'Creando SalarioAjuste' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const SalarioAjustes = await pool.query('SELECT * FROM SalarioAjuste');
        res.json(SalarioAjustes);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const SalarioAjuste = await pool.query('SELECT * FROM SalarioAjuste WHERE IDSalarioAjuste = ?', [id]);
        if (SalarioAjuste.length > 0) {
            return res.json(SalarioAjuste[0]);
        }
        res.status(404).json({ text: "SalarioAjuste no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE SalarioAjuste set ? WHERE IDSalarioAjuste=?', [req.body, id]);
        res.json({ message: 'actualizando SalarioAjuste ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM SalarioAjuste WHERE IDSalarioAjuste=?', [id]);
        res.json({ message: 'Eliminando SalarioAjuste ' + [id] });
    }

}
const SalarioAjuste = new Controlador();
export default SalarioAjuste;