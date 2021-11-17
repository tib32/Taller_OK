import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO Contacto set ?', [req.body]);
        res.json({ text: 'Creando Contacto' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const Contactos = await pool.query('SELECT * FROM Contacto');
        res.json(Contactos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const Contacto = await pool.query('SELECT * FROM Contacto WHERE IDContacto = ?', [id]);
        if (Contacto.length > 0) {
            return res.json(Contacto[0]);
        }
        res.status(404).json({ text: "Contacto no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Contacto set ? WHERE IDContacto=?', [req.body, id]);
        res.json({ message: 'actualizando Contacto ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Contacto WHERE IDContacto=?', [id]);
        res.json({ message: 'Eliminando Contacto ' + [id] });
    }

}
const Contacto = new Controlador();
export default Contacto;