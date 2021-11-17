import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Direccion set ?', [req.body]);
        res.json({ text: 'Creando Direccion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Direccions = await pool.query('SELECT * FROM Direccion');
        res.json(Direccions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Direccion = await pool.query('SELECT * FROM Direccion WHERE IDDireccion = ?', [id]);
        if (Direccion.length > 0) {
            return res.json(Direccion[0]);
        }
        res.status(404).json({ text: "Direccion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Direccion set ? WHERE IDDireccion=?', [req.body, id]);
        res.json({ message: 'actualizando Direccion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Direccion WHERE IDDireccion=?', [id]);
        res.json({ message: 'Eliminando Direccion ' + [id] });
    }

}
const Direccion = new Controlador();
export default Direccion;