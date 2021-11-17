import { Request, Response } from 'express';
import pool from '../database'

class Controlador {
    public async insertar(req: Request, res: Response) {
        await pool.query('INSERT INTO PasarelaPago set ?', [req.body]);
        res.json({ text: 'Creando PasarelaPago' });
    }
    public async lista(req: Request, res: Response): Promise<void> {
        const PasarelaPagos = await pool.query('SELECT * FROM PasarelaPago');
        res.json(PasarelaPagos);
    }
    public async mostrarID(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const PasarelaPago = await pool.query('SELECT * FROM PasarelaPago WHERE IDPasarelaPago = ?', [id]);
        if (PasarelaPago.length > 0) {
            return res.json(PasarelaPago[0]);
        }
        res.status(404).json({ text: "PasarelaPago no encontrado" });

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE PasarelaPago set ? WHERE IDPasarelaPago=?', [req.body, id]);
        res.json({ message: 'actualizando PasarelaPago ' + [id] });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM PasarelaPago WHERE IDPasarelaPago=?', [id]);
        res.json({ message: 'Eliminando PasarelaPago ' + [id] });
    }

}
const PasarelaPago = new Controlador();
export default PasarelaPago;