import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Producto set ?', [req.body]);
        res.json({ text: 'Creando Producto' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Productos = await pool.query('SELECT * FROM Producto');
        res.json(Productos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Producto = await pool.query('SELECT * FROM Producto WHERE IDProducto = ?', [id]);
        if (Producto.length > 0) {
            return res.json(Producto[0]);
        }
        res.status(404).json({ text: "Producto no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Producto set ? WHERE IDProducto=?', [req.body, id]);
        res.json({ message: 'actualizando Producto ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Producto WHERE IDProducto=?', [id]);
        res.json({ message: 'Eliminando Producto ' + [id] });
    }

}
const Producto = new Controlador();
export default Producto;