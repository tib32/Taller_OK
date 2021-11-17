import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO CajaArqueoDetalle set ?', [req.body]);
        res.json({ text: 'Creando CajaArqueoDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const CajaArqueoDetalles = await pool.query('SELECT * FROM CajaArqueoDetalle');
        res.json(CajaArqueoDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const CajaArqueoDetalle = await pool.query('SELECT * FROM CajaArqueoDetalle WHERE IDCajaArqueoDetalle = ?', [id]);
        if (CajaArqueoDetalle.length > 0) {
            return res.json(CajaArqueoDetalle[0]);
        }
        res.status(404).json({ text: "CajaArqueoDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE CajaArqueoDetalle set ? WHERE IDCajaArqueoDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando CajaArqueoDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CajaArqueoDetalle WHERE IDCajaArqueoDetalle=?', [id]);
        res.json({ message: 'Eliminando CajaArqueoDetalle ' + [id] });
    }

}
const CajaArqueoDetalle = new Controlador();
export default CajaArqueoDetalle;