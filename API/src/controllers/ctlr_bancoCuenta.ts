import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO bancoCuenta set ?', [req.body]);
        res.json({ text: 'Creando bancoCuenta' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const bancoCuentas = await pool.query('SELECT * FROM bancoCuenta');
        res.json(bancoCuentas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const bancoCuenta = await pool.query('SELECT * FROM bancoCuenta WHERE IDbancoCuenta = ?', [id]);
        if (bancoCuenta.length > 0) {
            return res.json(bancoCuenta[0]);
        }
        res.status(404).json({ text: "bancoCuenta no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE bancoCuenta set ? WHERE IDbancoCuenta=?', [req.body, id]);
        res.json({ message: 'actualizando bancoCuenta ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM bancoCuenta WHERE IDbancoCuenta=?', [id]);
        res.json({ message: 'Eliminando bancoCuenta ' + [id] });
    }

}
const bancoCuenta = new Controlador();
export default bancoCuenta;