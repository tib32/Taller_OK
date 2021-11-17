import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ManoDeObra set ?', [req.body]);
        res.json({ text: 'Creando ManoDeObra' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ManoDeObras = await pool.query('SELECT * FROM ManoDeObra');
        res.json(ManoDeObras);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ManoDeObra = await pool.query('SELECT * FROM ManoDeObra WHERE IDManoDeObra = ?', [id]);
        if (ManoDeObra.length > 0) {
            return res.json(ManoDeObra[0]);
        }
        res.status(404).json({ text: "ManoDeObra no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ManoDeObra set ? WHERE IDManoDeObra=?', [req.body, id]);
        res.json({ message: 'actualizando ManoDeObra ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ManoDeObra WHERE IDManoDeObra=?', [id]);
        res.json({ message: 'Eliminando ManoDeObra ' + [id] });
    }

}
const ManoDeObra = new Controlador();
export default ManoDeObra;