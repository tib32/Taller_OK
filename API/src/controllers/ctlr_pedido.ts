import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Pedido set ?', [req.body]);
        res.json({ text: 'Creando Pedido' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Pedidos = await pool.query('SELECT * FROM Pedido');
        res.json(Pedidos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Pedido = await pool.query('SELECT * FROM Pedido WHERE IDPedido = ?', [id]);
        if (Pedido.length > 0) {
            return res.json(Pedido[0]);
        }
        res.status(404).json({ text: "Pedido no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Pedido set ? WHERE IDPedido=?', [req.body, id]);
        res.json({ message: 'actualizando Pedido ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Pedido WHERE IDPedido=?', [id]);
        res.json({ message: 'Eliminando Pedido ' + [id] });
    }

}
const Pedido = new Controlador();
export default Pedido;