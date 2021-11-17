import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO ServicioInsumo_Cat set ?', [req.body]);
        res.json({ text: 'Creando ServicioInsumo_Cat' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const ServicioInsumo_Cats = await pool.query('SELECT * FROM ServicioInsumo_Cat');
        res.json(ServicioInsumo_Cats);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ServicioInsumo_Cat = await pool.query('SELECT * FROM ServicioInsumo_Cat WHERE IDServicioInsumo_Cat = ?', [id]);
        if (ServicioInsumo_Cat.length > 0) {
            return res.json(ServicioInsumo_Cat[0]);
        }
        res.status(404).json({ text: "ServicioInsumo_Cat no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ServicioInsumo_Cat set ? WHERE IDServicioInsumo_Cat=?', [req.body, id]);
        res.json({ message: 'actualizando ServicioInsumo_Cat ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ServicioInsumo_Cat WHERE IDServicioInsumo_Cat=?', [id]);
        res.json({ message: 'Eliminando ServicioInsumo_Cat ' + [id] });
    }

}
const ServicioInsumo_Cat = new Controlador();
export default ServicioInsumo_Cat;