import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO marca set ?', [req.body]);
        res.json({ text: 'Creando marca' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const marcas = await pool.query('SELECT * FROM marca');
        res.json(marcas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const marca = await pool.query('SELECT * FROM marca WHERE IDMarca = ?', [id]);
        if (marca.length > 0) {
            return res.json(marca[0]);
        }
        res.status(404).json({ text: "marca no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE marca set ? WHERE IDMarca=?', [req.body, id]);
        res.json({ message: 'actualizando marca ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM marca WHERE IDMarca=?', [id]);
        res.json({ message: 'Eliminando marca ' + [id] });
    }

}
const marca = new Controlador();
export default marca;