import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Repuesto set ?', [req.body]);
        res.json({ text: 'Creando Repuesto' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Repuestos = await pool.query('SELECT * FROM Repuesto');
        res.json(Repuestos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Repuesto = await pool.query('SELECT * FROM Repuesto WHERE IDRepuesto = ?', [id]);
        if (Repuesto.length > 0) {
            return res.json(Repuesto[0]);
        }
        res.status(404).json({ text: "Repuesto no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Repuesto set ? WHERE IDRepuesto=?', [req.body, id]);
        res.json({ message: 'actualizando Repuesto ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Repuesto WHERE IDRepuesto=?', [id]);
        res.json({ message: 'Eliminando Repuesto ' + [id] });
    }

}
const Repuesto = new Controlador();
export default Repuesto;