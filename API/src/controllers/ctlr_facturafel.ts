import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO FacturaFel set ?', [req.body]);
        res.json({ text: 'Creando FacturaFel' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const FacturaFels = await pool.query('SELECT * FROM FacturaFel');
        res.json(FacturaFels);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const FacturaFel = await pool.query('SELECT * FROM FacturaFel WHERE IDFacturaFel = ?', [id]);
        if (FacturaFel.length > 0) {
            return res.json(FacturaFel[0]);
        }
        res.status(404).json({ text: "FacturaFel no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE FacturaFel set ? WHERE IDFacturaFel=?', [req.body, id]);
        res.json({ message: 'actualizando FacturaFel ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM FacturaFel WHERE IDFacturaFel=?', [id]);
        res.json({ message: 'Eliminando FacturaFel ' + [id] });
    }

}
const FacturaFel = new Controlador();
export default FacturaFel;