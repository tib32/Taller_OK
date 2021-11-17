import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Sucursal set ?', [req.body]);
        res.json({ text: 'Creando Sucursal' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Sucursals = await pool.query('SELECT * FROM Sucursal');
        res.json(Sucursals);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Sucursal = await pool.query('SELECT * FROM Sucursal WHERE IDSucursal = ?', [id]);
        if (Sucursal.length > 0) {
            return res.json(Sucursal[0]);
        }
        res.status(404).json({ text: "Sucursal no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Sucursal set ? WHERE IDSucursal=?', [req.body, id]);
        res.json({ message: 'actualizando Sucursal ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Sucursal WHERE IDSucursal=?', [id]);
        res.json({ message: 'Eliminando Sucursal ' + [id] });
    }

}
const Sucursal = new Controlador();
export default Sucursal;