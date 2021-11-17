import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO TipoDoc set ?', [req.body]);
        res.json({ text: 'Creando TipoDoc' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const TipoDocs = await pool.query('SELECT * FROM TipoDoc');
        res.json(TipoDocs);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const TipoDoc = await pool.query('SELECT * FROM TipoDoc WHERE IDTipoDoc = ?', [id]);
        if (TipoDoc.length > 0) {
            return res.json(TipoDoc[0]);
        }
        res.status(404).json({ text: "TipoDoc no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE TipoDoc set ? WHERE IDTipoDoc=?', [req.body, id]);
        res.json({ message: 'actualizando TipoDoc ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM TipoDoc WHERE IDTipoDoc=?', [id]);
        res.json({ message: 'Eliminando TipoDoc ' + [id] });
    }

}
const TipoDoc = new Controlador();
export default TipoDoc;