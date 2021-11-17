import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.json({ text: 'Creando categoria' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const categoria = await pool.query('SELECT * FROM categoria');
        res.json(categoria);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categoria = await pool.query('SELECT * FROM categoria WHERE IDCategoria = ?', [id]);
        if (categoria.length > 0) {
            return res.json(categoria[0]);
        }
        res.status(404).json({ text: "categoria no encontrada" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE categoria set ? WHERE IDCategoria=?', [req.body, id]);
        res.json({ message: 'actualizando categoria ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM categoria WHERE IDCategoria=?', [id]);
        res.json({ message: 'Eliminando categoria ' + [id] });
    }

}
const categoria = new Controlador();
export default categoria;