import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO DenominacionMoneda set ?', [req.body]);
        res.json({ text: 'Creando DenominacionMoneda' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const DenominacionMonedas = await pool.query('SELECT * FROM DenominacionMoneda');
        res.json(DenominacionMonedas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const DenominacionMoneda = await pool.query('SELECT * FROM DenominacionMoneda WHERE IDDenominacionMoneda = ?', [id]);
        if (DenominacionMoneda.length > 0) {
            return res.json(DenominacionMoneda[0]);
        }
        res.status(404).json({ text: "DenominacionMoneda no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE DenominacionMoneda set ? WHERE IDDenominacionMoneda=?', [req.body, id]);
        res.json({ message: 'actualizando DenominacionMoneda ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM DenominacionMoneda WHERE IDDenominacionMoneda=?', [id]);
        res.json({ message: 'Eliminando DenominacionMoneda ' + [id] });
    }

}
const DenominacionMoneda = new Controlador();
export default DenominacionMoneda;