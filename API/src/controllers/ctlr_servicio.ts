import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Servicio set ?', [req.body]);
        res.json({ text: 'Creando Servicio' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Servicios = await pool.query('SELECT * FROM Servicio');
        res.json(Servicios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Servicio = await pool.query('SELECT * FROM Servicio WHERE IDServicio = ?', [id]);
        if (Servicio.length > 0) {
            return res.json(Servicio[0]);
        }
        res.status(404).json({ text: "Servicio no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Servicio set ? WHERE IDServicio=?', [req.body, id]);
        res.json({ message: 'actualizando Servicio ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Servicio WHERE IDServicio=?', [id]);
        res.json({ message: 'Eliminando Servicio ' + [id] });
    }

}
const Servicio = new Controlador();
export default Servicio;