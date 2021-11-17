import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ContactoMedio set ?', [req.body]);
        res.json({ text: 'Creando ContactoMedio' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ContactoMedios = await pool.query('SELECT * FROM ContactoMedio');
        res.json(ContactoMedios);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ContactoMedio = await pool.query('SELECT * FROM ContactoMedio WHERE IDContactoMedio = ?', [id]);
        if (ContactoMedio.length > 0) {
            return res.json(ContactoMedio[0]);
        }
        res.status(404).json({ text: "ContactoMedio no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ContactoMedio set ? WHERE IDContactoMedio=?', [req.body, id]);
        res.json({ message: 'actualizando ContactoMedio ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ContactoMedio WHERE IDContactoMedio=?', [id]);
        res.json({ message: 'Eliminando ContactoMedio ' + [id] });
    }

}
const ContactoMedio = new Controlador();
export default ContactoMedio;