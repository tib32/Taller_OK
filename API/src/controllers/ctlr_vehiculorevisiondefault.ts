import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VehiculoRevisionDefault set ?', [req.body]);
        res.json({ text: 'Creando VehiculoRevisionDefault' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VehiculoRevisionDefaults = await pool.query('SELECT * FROM VehiculoRevisionDefault');
        res.json(VehiculoRevisionDefaults);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VehiculoRevisionDefault = await pool.query('SELECT * FROM VehiculoRevisionDefault WHERE IDVehiculoRevisionDefault = ?', [id]);
        if (VehiculoRevisionDefault.length > 0) {
            return res.json(VehiculoRevisionDefault[0]);
        }
        res.status(404).json({ text: "VehiculoRevisionDefault no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VehiculoRevisionDefault set ? WHERE IDVehiculoRevisionDefault=?', [req.body, id]);
        res.json({ message: 'actualizando VehiculoRevisionDefault ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VehiculoRevisionDefault WHERE IDVehiculoRevisionDefault=?', [id]);
        res.json({ message: 'Eliminando VehiculoRevisionDefault ' + [id] });
    }

}
const VehiculoRevisionDefault = new Controlador();
export default VehiculoRevisionDefault;