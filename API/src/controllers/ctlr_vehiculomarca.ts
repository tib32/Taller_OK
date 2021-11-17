import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO VehiculoMarca set ?', [req.body]);
        res.json({ text: 'Creando VehiculoMarca' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const VehiculoMarcas = await pool.query('SELECT * FROM VehiculoMarca');
        res.json(VehiculoMarcas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const VehiculoMarca = await pool.query('SELECT * FROM VehiculoMarca WHERE IDVehiculoMarca = ?', [id]);
        if (VehiculoMarca.length > 0) {
            return res.json(VehiculoMarca[0]);
        }
        res.status(404).json({ text: "VehiculoMarca no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE VehiculoMarca set ? WHERE IDVehiculoMarca=?', [req.body, id]);
        res.json({ message: 'actualizando VehiculoMarca ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM VehiculoMarca WHERE IDVehiculoMarca=?', [id]);
        res.json({ message: 'Eliminando VehiculoMarca ' + [id] });
    }

}
const VehiculoMarca = new Controlador();
export default VehiculoMarca;