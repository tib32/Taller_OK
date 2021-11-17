import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VehiculoTipo set ?', [req.body]);
        res.json({ text: 'Creando VehiculoTipo' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VehiculoTipos = await pool.query('SELECT * FROM VehiculoTipo');
        res.json(VehiculoTipos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VehiculoTipo = await pool.query('SELECT * FROM VehiculoTipo WHERE IDVehiculoTipo = ?', [id]);
        if (VehiculoTipo.length > 0) {
            return res.json(VehiculoTipo[0]);
        }
        res.status(404).json({ text: "VehiculoTipo no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VehiculoTipo set ? WHERE IDVehiculoTipo=?', [req.body, id]);
        res.json({ message: 'actualizando VehiculoTipo ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VehiculoTipo WHERE IDVehiculoTipo=?', [id]);
        res.json({ message: 'Eliminando VehiculoTipo ' + [id] });
    }

}
const VehiculoTipo = new Controlador();
export default VehiculoTipo;