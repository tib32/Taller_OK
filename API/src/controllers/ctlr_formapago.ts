import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO FormaPago set ?', [req.body]);
        res.json({ text: 'Creando FormaPago' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const FormaPagos = await pool.query('SELECT * FROM FormaPago');
        res.json(FormaPagos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const FormaPago = await pool.query('SELECT * FROM FormaPago WHERE IDFormaPago = ?', [id]);
        if (FormaPago.length > 0) {
            return res.json(FormaPago[0]);
        }
        res.status(404).json({ text: "FormaPago no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE FormaPago set ? WHERE IDFormaPago=?', [req.body, id]);
        res.json({ message: 'actualizando FormaPago ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM FormaPago WHERE IDFormaPago=?', [id]);
        res.json({ message: 'Eliminando FormaPago ' + [id] });
    }

}
const FormaPago = new Controlador();
export default FormaPago;