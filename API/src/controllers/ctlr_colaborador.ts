import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Colaborador set ?', [req.body]);
        res.json({ text: 'Creando Colaborador' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Colaboradors = await pool.query('SELECT * FROM Colaborador');
        res.json(Colaboradors);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Colaborador = await pool.query('SELECT * FROM Colaborador WHERE IDColaborador = ?', [id]);
        if (Colaborador.length > 0) {
            return res.json(Colaborador[0]);
        }
        res.status(404).json({ text: "Colaborador no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Colaborador set ? WHERE IDColaborador=?', [req.body, id]);
        res.json({ message: 'actualizando Colaborador ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Colaborador WHERE IDColaborador=?', [id]);
        res.json({ message: 'Eliminando Colaborador ' + [id] });
    }

}
const Colaborador = new Controlador();
export default Colaborador;