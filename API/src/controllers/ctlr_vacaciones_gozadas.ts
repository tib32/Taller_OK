import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Vacaciones_Gozadas set ?', [req.body]);
        res.json({ text: 'Creando Vacaciones_Gozadas' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Vacaciones_Gozadass = await pool.query('SELECT * FROM Vacaciones_Gozadas');
        res.json(Vacaciones_Gozadass);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Vacaciones_Gozadas = await pool.query('SELECT * FROM Vacaciones_Gozadas WHERE IDVacaciones_Gozadas = ?', [id]);
        if (Vacaciones_Gozadas.length > 0) {
            return res.json(Vacaciones_Gozadas[0]);
        }
        res.status(404).json({ text: "Vacaciones_Gozadas no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Vacaciones_Gozadas set ? WHERE IDVacaciones_Gozadas=?', [req.body, id]);
        res.json({ message: 'actualizando Vacaciones_Gozadas ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Vacaciones_Gozadas WHERE IDVacaciones_Gozadas=?', [id]);
        res.json({ message: 'Eliminando Vacaciones_Gozadas ' + [id] });
    }

}
const Vacaciones_Gozadas = new Controlador();
export default Vacaciones_Gozadas;