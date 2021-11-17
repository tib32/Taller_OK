import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Salario set ?', [req.body]);
        res.json({ text: 'Creando Salario' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Salarios = await pool.query('SELECT * FROM Salario');
        res.json(Salarios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Salario = await pool.query('SELECT * FROM Salario WHERE IDSalario = ?', [id]);
        if (Salario.length > 0) {
            return res.json(Salario[0]);
        }
        res.status(404).json({ text: "Salario no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Salario set ? WHERE IDSalario=?', [req.body, id]);
        res.json({ message: 'actualizando Salario ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Salario WHERE IDSalario=?', [id]);
        res.json({ message: 'Eliminando Salario ' + [id] });
    }

}
const Salario = new Controlador();
export default Salario;