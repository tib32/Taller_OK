import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Compra set ?', [req.body]);
        res.json({ text: 'Creando Compra' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Compras = await pool.query('SELECT * FROM Compra');
        res.json(Compras);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Compra = await pool.query('SELECT * FROM Compra WHERE IDCompra = ?', [id]);
        if (Compra.length > 0) {
            return res.json(Compra[0]);
        }
        res.status(404).json({ text: "Compra no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Compra set ? WHERE IDCompra=?', [req.body, id]);
        res.json({ message: 'actualizando Compra ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Compra WHERE IDCompra=?', [id]);
        res.json({ message: 'Eliminando Compra ' + [id] });
    }

}
const Compra = new Controlador();
export default Compra;