import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Descontar set ?', [req.body]);
        res.json({ text: 'Creando Descontar' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Descontars = await pool.query('SELECT * FROM Descontar');
        res.json(Descontars);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Descontar = await pool.query('SELECT * FROM Descontar WHERE IDDescontar = ?', [id]);
        if (Descontar.length > 0) {
            return res.json(Descontar[0]);
        }
        res.status(404).json({ text: "Descontar no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Descontar set ? WHERE IDDescontar=?', [req.body, id]);
        res.json({ message: 'actualizando Descontar ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Descontar WHERE IDDescontar=?', [id]);
        res.json({ message: 'Eliminando Descontar ' + [id] });
    }

}
const Descontar = new Controlador();
export default Descontar;