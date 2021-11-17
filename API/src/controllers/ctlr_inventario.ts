import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Inventario set ?', [req.body]);
        res.json({ text: 'Creando Inventario' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Inventarios = await pool.query('SELECT * FROM Inventario');
        res.json(Inventarios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Inventario = await pool.query('SELECT * FROM Inventario WHERE IDInventario = ?', [id]);
        if (Inventario.length > 0) {
            return res.json(Inventario[0]);
        }
        res.status(404).json({ text: "Inventario no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Inventario set ? WHERE IDInventario=?', [req.body, id]);
        res.json({ message: 'actualizando Inventario ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Inventario WHERE IDInventario=?', [id]);
        res.json({ message: 'Eliminando Inventario ' + [id] });
    }

}
const Inventario = new Controlador();
export default Inventario;