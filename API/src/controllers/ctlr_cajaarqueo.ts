import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CajaArqueo set ?', [req.body]);
        res.json({ text: 'Creando CajaArqueo' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CajaArqueos = await pool.query('SELECT * FROM CajaArqueo');
        res.json(CajaArqueos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CajaArqueo = await pool.query('SELECT * FROM CajaArqueo WHERE IDCajaArqueo = ?', [id]);
        if (CajaArqueo.length > 0) {
            return res.json(CajaArqueo[0]);
        }
        res.status(404).json({ text: "CajaArqueo no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CajaArqueo set ? WHERE IDCajaArqueo=?', [req.body, id]);
        res.json({ message: 'actualizando CajaArqueo ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CajaArqueo WHERE IDCajaArqueo=?', [id]);
        res.json({ message: 'Eliminando CajaArqueo ' + [id] });
    }

}
const CajaArqueo = new Controlador();
export default CajaArqueo;