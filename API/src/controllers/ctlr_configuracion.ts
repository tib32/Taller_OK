import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Configuracion set ?', [req.body]);
        res.json({ text: 'Creando Configuracion' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Configuracions = await pool.query('SELECT * FROM Configuracion');
        res.json(Configuracions);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Configuracion = await pool.query('SELECT * FROM Configuracion WHERE IDConfiguracion = ?', [id]);
        if (Configuracion.length > 0) {
            return res.json(Configuracion[0]);
        }
        res.status(404).json({ text: "Configuracion no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Configuracion set ? WHERE IDConfiguracion=?', [req.body, id]);
        res.json({ message: 'actualizando Configuracion ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Configuracion WHERE IDConfiguracion=?', [id]);
        res.json({ message: 'Eliminando Configuracion ' + [id] });
    }

}
const Configuracion = new Controlador();
export default Configuracion;