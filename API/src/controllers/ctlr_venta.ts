import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Venta set ?', [req.body]);
        res.json({ text: 'Creando Venta' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Ventas = await pool.query('SELECT * FROM Venta');
        res.json(Ventas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Venta = await pool.query('SELECT * FROM Venta WHERE IDVenta = ?', [id]);
        if (Venta.length > 0) {
            return res.json(Venta[0]);
        }
        res.status(404).json({ text: "Venta no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Venta set ? WHERE IDVenta=?', [req.body, id]);
        res.json({ message: 'actualizando Venta ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Venta WHERE IDVenta=?', [id]);
        res.json({ message: 'Eliminando Venta ' + [id] });
    }

}
const Venta = new Controlador();
export default Venta;