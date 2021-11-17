import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CajaChica set ?', [req.body]);
        res.json({ text: 'Creando CajaChica' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CajaChicas = await pool.query('SELECT * FROM CajaChica');
        res.json(CajaChicas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CajaChica = await pool.query('SELECT * FROM CajaChica WHERE IDCajaChica = ?', [id]);
        if (CajaChica.length > 0) {
            return res.json(CajaChica[0]);
        }
        res.status(404).json({ text: "CajaChica no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CajaChica set ? WHERE IDCajaChica=?', [req.body, id]);
        res.json({ message: 'actualizando CajaChica ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CajaChica WHERE IDCajaChica=?', [id]);
        res.json({ message: 'Eliminando CajaChica ' + [id] });
    }

}
const CajaChica = new Controlador();
export default CajaChica;