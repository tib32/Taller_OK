import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Servicio_Cat set ?', [req.body]);
        res.json({ text: 'Creando Servicio_Cat' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Servicio_Cats = await pool.query('SELECT * FROM Servicio_Cat');
        res.json(Servicio_Cats);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Servicio_Cat = await pool.query('SELECT * FROM Servicio_Cat WHERE IDServicio_Cat = ?', [id]);
        if (Servicio_Cat.length > 0) {
            return res.json(Servicio_Cat[0]);
        }
        res.status(404).json({ text: "Servicio_Cat no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Servicio_Cat set ? WHERE IDServicio_Cat=?', [req.body, id]);
        res.json({ message: 'actualizando Servicio_Cat ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Servicio_Cat WHERE IDServicio_Cat=?', [id]);
        res.json({ message: 'Eliminando Servicio_Cat ' + [id] });
    }

}
const Servicio_Cat = new Controlador();
export default Servicio_Cat;