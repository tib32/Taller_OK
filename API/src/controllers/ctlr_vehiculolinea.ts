import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VehiculoLinea set ?', [req.body]);
        res.json({ text: 'Creando VehiculoLinea' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VehiculoLineas = await pool.query('SELECT * FROM VehiculoLinea');
        res.json(VehiculoLineas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VehiculoLinea = await pool.query('SELECT * FROM VehiculoLinea WHERE IDVehiculoLinea = ?', [id]);
        if (VehiculoLinea.length > 0) {
            return res.json(VehiculoLinea[0]);
        }
        res.status(404).json({ text: "VehiculoLinea no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VehiculoLinea set ? WHERE IDVehiculoLinea=?', [req.body, id]);
        res.json({ message: 'actualizando VehiculoLinea ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VehiculoLinea WHERE IDVehiculoLinea=?', [id]);
        res.json({ message: 'Eliminando VehiculoLinea ' + [id] });
    }

}
const VehiculoLinea = new Controlador();
export default VehiculoLinea;