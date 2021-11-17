import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Vehiculos set ?', [req.body]);
        res.json({ text: 'Creando Vehiculos' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Vehiculoss = await pool.query('SELECT * FROM Vehiculos');
        res.json(Vehiculoss);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Vehiculos = await pool.query('SELECT * FROM Vehiculos WHERE IDVehiculos = ?', [id]);
        if (Vehiculos.length > 0) {
            return res.json(Vehiculos[0]);
        }
        res.status(404).json({ text: "Vehiculos no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Vehiculos set ? WHERE IDVehiculos=?', [req.body, id]);
        res.json({ message: 'actualizando Vehiculos ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Vehiculos WHERE IDVehiculos=?', [id]);
        res.json({ message: 'Eliminando Vehiculos ' + [id] });
    }

}
const Vehiculos = new Controlador();
export default Vehiculos;