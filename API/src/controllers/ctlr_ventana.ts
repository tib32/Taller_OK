import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Ventana set ?', [req.body]);
        res.json({ text: 'Creando Ventana' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Ventanas = await pool.query('SELECT * FROM Ventana');
        res.json(Ventanas);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Ventana = await pool.query('SELECT * FROM Ventana WHERE IDVentana = ?', [id]);
        if (Ventana.length > 0) {
            return res.json(Ventana[0]);
        }
        res.status(404).json({ text: "Ventana no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Ventana set ? WHERE IDVentana=?', [req.body, id]);
        res.json({ message: 'actualizando Ventana ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Ventana WHERE IDVentana=?', [id]);
        res.json({ message: 'Eliminando Ventana ' + [id] });
    }

}
const Ventana = new Controlador();
export default Ventana;