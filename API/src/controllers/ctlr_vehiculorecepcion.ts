import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VehiculoRecepcion set ?', [req.body]);
        res.json({ text: 'Creando VehiculoRecepcion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VehiculoRecepcions = await pool.query('SELECT * FROM VehiculoRecepcion');
        res.json(VehiculoRecepcions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VehiculoRecepcion = await pool.query('SELECT * FROM VehiculoRecepcion WHERE IDVehiculoRecepcion = ?', [id]);
        if (VehiculoRecepcion.length > 0) {
            return res.json(VehiculoRecepcion[0]);
        }
        res.status(404).json({ text: "VehiculoRecepcion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VehiculoRecepcion set ? WHERE IDVehiculoRecepcion=?', [req.body, id]);
        res.json({ message: 'actualizando VehiculoRecepcion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VehiculoRecepcion WHERE IDVehiculoRecepcion=?', [id]);
        res.json({ message: 'Eliminando VehiculoRecepcion ' + [id] });
    }

}
const VehiculoRecepcion = new Controlador();
export default VehiculoRecepcion;