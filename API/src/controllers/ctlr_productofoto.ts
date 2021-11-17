import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ProductoFoto set ?', [req.body]);
        res.json({ text: 'Creando ProductoFoto' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ProductoFotos = await pool.query('SELECT * FROM ProductoFoto');
        res.json(ProductoFotos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ProductoFoto = await pool.query('SELECT * FROM ProductoFoto WHERE IDProductoFoto = ?', [id]);
        if (ProductoFoto.length > 0) {
            return res.json(ProductoFoto[0]);
        }
        res.status(404).json({ text: "ProductoFoto no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ProductoFoto set ? WHERE IDProductoFoto=?', [req.body, id]);
        res.json({ message: 'actualizando ProductoFoto ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ProductoFoto WHERE IDProductoFoto=?', [id]);
        res.json({ message: 'Eliminando ProductoFoto ' + [id] });
    }

}
const ProductoFoto = new Controlador();
export default ProductoFoto;