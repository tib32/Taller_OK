import dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import Rut_Usuario from './routes/rut_usuario';
import Rut_Auth from './routes/rut_auth';

import Rut_categoria from './routes/rut_categoria';
import Rut_Marca from './routes/rut_marca';
import Rut_Um from './routes/rut_um';




import Rut_banco from './routes/rut_banco';
import Rut_bancocuenta from './routes/rut_bancoCuenta';
import Rut_bancomovimiento from './routes/rut_BancoMovimiento';
import Rut_bancooperacion from './routes/rut_bancooperacion';
import Rut_bonificacion from './routes/rut_bonificacion';
import Rut_bonificar from './routes/rut_bonificar';
import Rut_caja from './routes/rut_caja';
import Rut_cajaarqueo from './routes/rut_cajaarqueo';
import Rut_cajaarqueodetalle from './routes/rut_cajaarqueodetalle';
import Rut_cajachica from './routes/rut_cajachica';
import Rut_cajachicadetalle from './routes/rut_cajachicadetalle';
import Rut_colaborador from './routes/rut_colaborador';
import Rut_combo from './routes/rut_combo';
import Rut_combodetalle from './routes/rut_combodetalle';
import Rut_compra from './routes/rut_compra';
import Rut_compradetalle from './routes/rut_compradetalle';
import Rut_configuracion from './routes/rut_configuracion';
import Rut_contacto from './routes/rut_contacto';
import Rut_contactomedio from './routes/rut_contactomedio';
import Rut_cotizacion from './routes/rut_cotizacion';
import Rut_cotizaciondetalle from './routes/rut_cotizaciondetalle';
import Rut_denominacionmoneda from './routes/rut_denominacionmoneda';
import Rut_descontar from './routes/rut_descontar';
import Rut_descuento from './routes/rut_descuento';
import Rut_dinero from './routes/rut_dinero';
import Rut_direccion from './routes/rut_direccion';

import Rut_estado from './routes/rut_estado';
import Rut_facturafel from './routes/rut_facturafel';
import Rut_facturafeldetalle from './routes/rut_facturafeldetalle';
import Rut_falla from './routes/rut_falla';
import Rut_formapago from './routes/rut_formapago';
import Rut_globales from './routes/rut_globales';
import Rut_inventario from './routes/rut_inventario';

import Rut_lote from './routes/rut_lote';
import Rut_manodeobra from './routes/rut_manodeobra';
import Rut_medio from './routes/rut_medio';
import Rut_orden from './routes/rut_orden';
import Rut_ordendetalle from './routes/rut_ordendetalle';
import Rut_pasarelapago from './routes/rut_pasarelapago';
import Rut_pedido from './routes/rut_pedido';
import Rut_pedidodetalle from './routes/rut_pedidodetalle';
import Rut_precio from './routes/rut_precio';
import Rut_privilegios from './routes/rut_privilegios';
import Rut_producto from './routes/rut_producto';

import Rut_productofoto from './routes/rut_productofoto';
import Rut_repuesto from './routes/rut_repuesto';
import Rut_salario from './routes/rut_salario';
import Rut_salarioajuste from './routes/rut_salarioajuste';
import Rut_servicio from './routes/rut_servicio';
import Rut_servicio_cat from './routes/rut_servicio_cat';
import Rut_serviciodetalle from './routes/rut_serviciodetalle';
import Rut_servicioinsumo_cat from './routes/rut_servicioinsumo_cat';
import Rut_sucursal from './routes/rut_sucursal';

import Rut_tercero from './routes/rut_tercero';

import Rut_tipodoc from './routes/rut_tipodoc';
import Rut_tracking from './routes/rut_tracking';


import Rut_vacaciones_gozadas from './routes/rut_vacaciones_gozadas';
import Rut_vehiculo from './routes/rut_vehiculo';
import Rut_vehiculolinea from './routes/rut_vehiculolinea';
import Rut_vehiculomarca from './routes/rut_vehiculomarca';
import Rut_vehiculorecepcion from './routes/rut_vehiculorecepcion';
import Rut_vehiculorevisiondefault from './routes/rut_vehiculorevisiondefault';
import Rut_vehiculotipo from './routes/rut_vehiculotipo';
import Rut_venta from './routes/rut_venta';
import Rut_ventadetalle from './routes/rut_ventadetalle';
import Rut_ventana from './routes/rut_ventana';
import Rut_ventana_control from './routes/rut_ventana_control';

class Server {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));

    // MidleWares
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use('/', routes);
    this.app.use('/users', Rut_Usuario);
    this.app.use('/auth', Rut_Auth);

    this.app.use('/products/categorias', Rut_categoria);
    this.app.use('/products/marcas', Rut_Marca);
    this.app.use('/products/ums', Rut_Um);

    this.app.use('/api/banco', Rut_banco);
    this.app.use('/api/bancocuenta', Rut_bancocuenta);
    this.app.use('/api/bancomovimiento', Rut_bancomovimiento);
    this.app.use('/api/bancooperacion', Rut_bancooperacion);

    this.app.use('/planilla/colaborador', Rut_colaborador);
    this.app.use('/planilla/bonificar', Rut_bonificar);
    this.app.use('/planilla/bonificacion', Rut_bonificacion);
    this.app.use('/planilla/descontar', Rut_descontar);
    this.app.use('/planilla/descuento', Rut_descuento);
    this.app.use('/planilla/salario', Rut_salario);
    this.app.use('/planilla/salarioajuste', Rut_salarioajuste);
    this.app.use('/planilla/vacaciones_gozadas', Rut_vacaciones_gozadas);

    this.app.use('/api/sucursal', Rut_sucursal);
    this.app.use('/api/caja', Rut_caja);
    this.app.use('/api/cajaarqueo', Rut_cajaarqueo);
    this.app.use('/api/cajaarqueodetalle', Rut_cajaarqueodetalle);

    this.app.use('/api/compra', Rut_compra);
    this.app.use('/api/compradetalle', Rut_compradetalle);

    this.app.use('/api/cajachica', Rut_cajachica);
    this.app.use('/api/cajachicadetalle', Rut_cajachicadetalle);

    this.app.use('/api/configuracion', Rut_configuracion);
    this.app.use('/api/denominacionmoneda', Rut_denominacionmoneda);
    this.app.use('/api/estado', Rut_estado);
    this.app.use('/api/dinero', Rut_dinero);
    this.app.use('/api/formapago', Rut_formapago);
    this.app.use('/api/globales', Rut_globales);
    this.app.use('/api/tipodoc', Rut_tipodoc);

    this.app.use('/api/tercero', Rut_tercero);
    this.app.use('/api/direccion', Rut_direccion);
    this.app.use('/api/medio', Rut_medio);
    this.app.use('/api/contacto', Rut_contacto);
    this.app.use('/api/contactomedio', Rut_contactomedio);

    this.app.use('/api/cotizacion', Rut_cotizacion);
    this.app.use('/api/cotizaciondetalle', Rut_cotizaciondetalle);

    this.app.use('/api/orden', Rut_orden);
    this.app.use('/api/ordendetalle', Rut_ordendetalle);
    this.app.use('/api/falla', Rut_falla);
    this.app.use('/api/manodeobra', Rut_manodeobra);
    this.app.use('/api/repuesto', Rut_repuesto);

    this.app.use('/api/producto', Rut_producto);
    this.app.use('/api/lote', Rut_lote);
    this.app.use('/api/precio', Rut_precio);
    this.app.use('/api/productofoto', Rut_productofoto);
    this.app.use('/api/inventario', Rut_inventario);

    this.app.use('/api/servicio', Rut_servicio);
    this.app.use('/api/servicio_cat', Rut_servicio_cat);
    this.app.use('/api/serviciodetalle', Rut_serviciodetalle);
    this.app.use('/api/servicioinsumo_cat', Rut_servicioinsumo_cat);




    this.app.use('/api/privilegios', Rut_privilegios);


    this.app.use('/api/vehiculo', Rut_vehiculo);
    this.app.use('/api/vehiculolinea', Rut_vehiculolinea);
    this.app.use('/api/vehiculomarca', Rut_vehiculomarca);
    this.app.use('/api/vehiculotipo', Rut_vehiculotipo);
    this.app.use('/api/vehiculorecepcion', Rut_vehiculorecepcion);
    this.app.use('/api/vehiculorevisiondefault', Rut_vehiculorevisiondefault);

    this.app.use('/api/pedido', Rut_pedido);
    this.app.use('/api/tracking', Rut_tracking);
    this.app.use('/api/pedidodetalle', Rut_pedidodetalle);

    this.app.use('/api/venta', Rut_venta);
    this.app.use('/api/ventadetalle', Rut_ventadetalle);
    this.app.use('/api/combo', Rut_combo);
    this.app.use('/api/combodetalle', Rut_combodetalle);

    this.app.use('/api/pasarelapago', Rut_pasarelapago);

    this.app.use('/api/facturafel', Rut_facturafel);
    this.app.use('/api/facturafeldetalle', Rut_facturafeldetalle);

    this.app.use('/api/ventana', Rut_ventana);
    this.app.use('/api/ventana_control', Rut_ventana_control);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}
const server = new Server();
server.start();
