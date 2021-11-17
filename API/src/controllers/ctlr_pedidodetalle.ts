import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO PedidoDetalle set ?', [req.body]);
        res.json({ text: 'Creando PedidoDetalle' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const PedidoDetalles = await pool.query('SELECT * FROM PedidoDetalle');
        res.json(PedidoDetalles);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const PedidoDetalle = await pool.query('SELECT * FROM PedidoDetalle WHERE IDPedidoDetalle = ?', [id]);
        if (PedidoDetalle.length > 0) {
            return res.json(PedidoDetalle[0]);
        }
        res.status(404).json({ text: "PedidoDetalle no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE PedidoDetalle set ? WHERE IDPedidoDetalle=?', [req.body, id]);
        res.json({ message: 'actualizando PedidoDetalle ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM PedidoDetalle WHERE IDPedidoDetalle=?', [id]);
        res.json({ message: 'Eliminando PedidoDetalle ' + [id] });
    }

}
const PedidoDetalle = new Controlador();
export default PedidoDetalle;