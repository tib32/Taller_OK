import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Vehiculo set ?', [req.body]);
        res.json({ text: 'Creando Vehiculo' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Vehiculos = await pool.query('SELECT * FROM Vehiculo');
        res.json(Vehiculos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Vehiculo = await pool.query('SELECT * FROM Vehiculo WHERE IDVehiculo = ?', [id]);
        if (Vehiculo.length > 0) {
            return res.json(Vehiculo[0]);
        }
        res.status(404).json({ text: "Vehiculo no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Vehiculo set ? WHERE IDVehiculo=?', [req.body, id]);
        res.json({ message: 'actualizando Vehiculo ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Vehiculo WHERE IDVehiculo=?', [id]);
        res.json({ message: 'Eliminando Vehiculo ' + [id] });
    }

}
const Vehiculo = new Controlador();
export default Vehiculo;