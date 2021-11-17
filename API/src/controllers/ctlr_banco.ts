import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO banco set ?', [req.body]);
        res.json({ text: 'Creando banco' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const bancos = await pool.query('SELECT * FROM banco');
        res.json(bancos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const banco = await pool.query('SELECT * FROM banco WHERE IDbanco = ?', [id]);
        if (banco.length > 0) {
            return res.json(banco[0]);
        }
        res.status(404).json({ text: "banco no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE banco set ? WHERE IDbanco=?', [req.body, id]);
        res.json({ message: 'actualizando banco ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM banco WHERE IDbanco=?', [id]);
        res.json({ message: 'Eliminando banco ' + [id] });
    }

}
const banco = new Controlador();
export default banco;