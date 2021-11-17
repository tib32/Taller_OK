import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Estado set ?', [req.body]);
        res.json({ text: 'Creando Estado' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Estados = await pool.query('SELECT * FROM Estado');
        res.json(Estados);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Estado = await pool.query('SELECT * FROM Estado WHERE IDEstado = ?', [id]);
        if (Estado.length > 0) {
            return res.json(Estado[0]);
        }
        res.status(404).json({ text: "Estado no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Estado set ? WHERE IDEstado=?', [req.body, id]);
        res.json({ message: 'actualizando Estado ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Estado WHERE IDEstado=?', [id]);
        res.json({ message: 'Eliminando Estado ' + [id] });
    }

}
const Estado = new Controlador();
export default Estado;