import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Precio set ?', [req.body]);
        res.json({ text: 'Creando Precio' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Precios = await pool.query('SELECT * FROM Precio');
        res.json(Precios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Precio = await pool.query('SELECT * FROM Precio WHERE IDPrecio = ?', [id]);
        if (Precio.length > 0) {
            return res.json(Precio[0]);
        }
        res.status(404).json({ text: "Precio no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Precio set ? WHERE IDPrecio=?', [req.body, id]);
        res.json({ message: 'actualizando Precio ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Precio WHERE IDPrecio=?', [id]);
        res.json({ message: 'Eliminando Precio ' + [id] });
    }

}
const Precio = new Controlador();
export default Precio;