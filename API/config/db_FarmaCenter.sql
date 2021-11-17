#
# DUMP FILE
#
# Database is ported from MS Access
#------------------------------------------------------------------
# Created using "MS Access to MySQL" form http://www.bullzip.com
# Program Version 5.5.282
#
# OPTIONS:
#   sourcefilename=F:/FarmaCentro.mdb
#   sourceusername=root
#   sourcepassword=** HIDDEN **
#   sourcesystemdatabase=
#   destinationdatabase=db_FarmaCenter
#   storageengine=InnoDB
#   dropdatabase=0
#   createtables=1
#   unicode=1
#   autocommit=1
#   transferdefaultvalues=1
#   transferindexes=1
#   transferautonumbers=1
#   transferrecords=1
#   columnlist=1
#   tableprefix=
#   negativeboolean=0
#   ignorelargeblobs=0
#   memotype=LONGTEXT
#   datetimetype=DATETIME
#

CREATE DATABASE IF NOT EXISTS `db_FarmaCenter`;
USE `db_FarmaCenter`;

#
# Table structure for table 'Categoria'
#

DROP TABLE IF EXISTS `Categoria`;

CREATE TABLE `Categoria` (
  `IDCategoria` INTEGER NOT NULL AUTO_INCREMENT, 
  `Categoria` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  PRIMARY KEY (`IDCategoria`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Categoria'
#

# 0 records

#
# Table structure for table 'Contacto'
#

DROP TABLE IF EXISTS `Contacto`;

CREATE TABLE `Contacto` (
  `IDContacto` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDTercero` INTEGER, 
  `Nombre` VARCHAR(255), 
  `Medio` VARCHAR(20), 
  `Valor` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  INDEX (`IDTercero`), 
  PRIMARY KEY (`IDContacto`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Contacto'
#

# 0 records

#
# Table structure for table 'Direccion'
#

DROP TABLE IF EXISTS `Direccion`;

CREATE TABLE `Direccion` (
  `IDDireccion` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDTercero` INTEGER, 
  `Tipo` VARCHAR(20), 
  `Fecha` DATETIME, 
  `Nomenclatura` VARCHAR(255), 
  `Calle` INTEGER, 
  `Avenida` INTEGER, 
  `Zona` INTEGER, 
  `Departamento` VARCHAR(255), 
  `Ref1` VARCHAR(255), 
  `Ref2` VARCHAR(255), 
  `Tel1` VARCHAR(10), 
  `Tel2` VARCHAR(10), 
  INDEX (`IDTercero`), 
  PRIMARY KEY (`IDDireccion`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Direccion'
#

# 0 records

#
# Table structure for table 'Estado'
#

DROP TABLE IF EXISTS `Estado`;

CREATE TABLE `Estado` (
  `Estado` VARCHAR(1) NOT NULL, 
  `NombreEstado` VARCHAR(255), 
  PRIMARY KEY (`Estado`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Estado'
#

# 0 records

#
# Table structure for table 'FacturaFEL'
#

DROP TABLE IF EXISTS `FacturaFEL`;

CREATE TABLE `FacturaFEL` (
  `IDFel` INTEGER NOT NULL AUTO_INCREMENT, 
  PRIMARY KEY (`IDFel`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'FacturaFEL'
#

# 0 records

#
# Table structure for table 'Financiero'
#

DROP TABLE IF EXISTS `Financiero`;

CREATE TABLE `Financiero` (
  `IDFinanciero` INTEGER NOT NULL AUTO_INCREMENT, 
  `TipoOperacion` INTEGER, 
  `IDOperacion` INTEGER, 
  `Fecha` DATETIME, 
  `IDUsuario` INTEGER, 
  `Monto` DECIMAL(19,4), 
  `Certificacion` VARCHAR(255), 
  `Numero` VARCHAR(20), 
  `FormaPago` VARCHAR(20), 
  INDEX (`IDOperacion`), 
  INDEX (`IDUsuario`), 
  PRIMARY KEY (`IDFinanciero`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Financiero'
#

# 0 records

#
# Table structure for table 'Globales'
#

DROP TABLE IF EXISTS `Globales`;

CREATE TABLE `Globales` (
  `Empresa` VARCHAR(255), 
  `Slogan` VARCHAR(255), 
  `Impuesto` INTEGER
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Globales'
#

# 0 records

#
# Table structure for table 'Inventario'
#

DROP TABLE IF EXISTS `Inventario`;

CREATE TABLE `Inventario` (
  `IDInventario` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDSucursal` INTEGER, 
  `IDProducto` INTEGER, 
  `Existencia` INTEGER, 
  `Costo` INTEGER, 
  `Almacen` VARCHAR(20), 
  `Inicio` INTEGER, 
  `Fin` INTEGER, 
  `Acumula` INTEGER, 
  INDEX (`IDProducto`), 
  INDEX (`IDSucursal`), 
  PRIMARY KEY (`IDInventario`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Inventario'
#

# 0 records

#
# Table structure for table 'Lote'
#

DROP TABLE IF EXISTS `Lote`;

CREATE TABLE `Lote` (
  `IDLote` INTEGER NOT NULL AUTO_INCREMENT, 
  `Movimiento` INTEGER, 
  `TipoDoc` INTEGER, 
  `IDOrigen` INTEGER, 
  `IDDestino` INTEGER, 
  `IDTercero` INTEGER, 
  `Fecha` DATETIME, 
  `Cantidad` INTEGER, 
  `Costo` INTEGER, 
  `Fijado` INTEGER, 
  `Total` INTEGER, 
  `CostoExtraM` INTEGER, 
  `DescuentoM` INTEGER, 
  `Final` INTEGER, 
  `IDUsuario` INTEGER, 
  `Observacion` LONGTEXT, 
  INDEX (`IDDestino`), 
  INDEX (`IDOrigen`), 
  INDEX (`IDTercero`), 
  INDEX (`IDUsuario`), 
  PRIMARY KEY (`IDLote`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Lote'
#

# 0 records

#
# Table structure for table 'LotesDetalle'
#

DROP TABLE IF EXISTS `LotesDetalle`;

CREATE TABLE `LotesDetalle` (
  `IDLoteDet` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDLote` INTEGER, 
  `IDInventario` INTEGER, 
  `IDProducto` INTEGER, 
  `IDUM` INTEGER, 
  `Cantidad` INTEGER, 
  `Estado` VARCHAR(20), 
  `FechaVence` DATETIME, 
  `DiasPreviosGarantia` INTEGER, 
  `Costo` INTEGER, 
  `Fijado` INTEGER, 
  `Total` INTEGER, 
  `CostoExtra` INTEGER, 
  `Descuento` INTEGER, 
  INDEX (`IDInventario`), 
  INDEX (`IDLote`), 
  INDEX (`IDProducto`), 
  INDEX (`IDUM`), 
  PRIMARY KEY (`IDLoteDet`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'LotesDetalle'
#

# 0 records

#
# Table structure for table 'Marca'
#

DROP TABLE IF EXISTS `Marca`;

CREATE TABLE `Marca` (
  `IDMarca` INTEGER NOT NULL AUTO_INCREMENT, 
  `Marca` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  PRIMARY KEY (`IDMarca`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Marca'
#

# 0 records

#
# Table structure for table 'Precio'
#

DROP TABLE IF EXISTS `Precio`;

CREATE TABLE `Precio` (
  `IDPrecio` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDInventario` INTEGER, 
  `Min` INTEGER, 
  `Max` INTEGER, 
  `Precio` DECIMAL(19,4), 
  `FechaIni` DATETIME, 
  `FechaFin` DATETIME, 
  INDEX (`IDInventario`), 
  PRIMARY KEY (`IDPrecio`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Precio'
#

# 0 records

#
# Table structure for table 'Producto'
#

DROP TABLE IF EXISTS `Producto`;

CREATE TABLE `Producto` (
  `IDProducto` INTEGER NOT NULL AUTO_INCREMENT, 
  `NombreComercial` VARCHAR(255), 
  `NombreGenerico` VARCHAR(255), 
  `IDCategoria` INTEGER, 
  `IDMarca` INTEGER, 
  `IDUM` INTEGER, 
  `Estado` VARCHAR(20), 
  INDEX (`IDCategoria`), 
  INDEX (`IDMarca`), 
  INDEX (`IDUM`), 
  PRIMARY KEY (`IDProducto`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Producto'
#

# 0 records

#
# Table structure for table 'ProductoDetalle'
#

DROP TABLE IF EXISTS `ProductoDetalle`;

CREATE TABLE `ProductoDetalle` (
  `IDProdDet` INTEGER NOT NULL AUTO_INCREMENT, 
  `IDProducto` INTEGER, 
  `Edad` INTEGER, 
  `Unidad` VARCHAR(12), 
  `Via` VARCHAR(20), 
  `Indicaciones` LONGTEXT, 
  `Dosis` LONGTEXT, 
  `ContraIndicaciones` LONGTEXT, 
  `Composicion` LONGTEXT, 
  `Grados` INTEGER, 
  INDEX (`IDProducto`), 
  PRIMARY KEY (`IDProdDet`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'ProductoDetalle'
#

# 0 records

#
# Table structure for table 'Sucursal'
#

DROP TABLE IF EXISTS `Sucursal`;

CREATE TABLE `Sucursal` (
  `IDSucursal` INTEGER NOT NULL AUTO_INCREMENT, 
  `Sucursal` VARCHAR(255), 
  `WhatsApp` VARCHAR(20), 
  `Dirección` VARCHAR(255), 
  `Geoposicion` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  PRIMARY KEY (`IDSucursal`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Sucursal'
#

# 0 records

#
# Table structure for table 'Tercero'
#

DROP TABLE IF EXISTS `Tercero`;

CREATE TABLE `Tercero` (
  `IDTercero` INTEGER NOT NULL AUTO_INCREMENT, 
  `Nombre` VARCHAR(255), 
  `ID1` VARCHAR(255), 
  `ID2` VARCHAR(255), 
  `Tipo` VARCHAR(1), 
  `Observacion` LONGTEXT, 
  INDEX (`ID1`), 
  INDEX (`ID2`), 
  PRIMARY KEY (`IDTercero`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Tercero'
#

# 0 records

#
# Table structure for table 'TipoDoc'
#

DROP TABLE IF EXISTS `TipoDoc`;

CREATE TABLE `TipoDoc` (
  `IDTipoDoc` INTEGER NOT NULL AUTO_INCREMENT, 
  `TipoDoc` INTEGER, 
  `IDMovimiento` INTEGER, 
  INDEX (`IDMovimiento`), 
  PRIMARY KEY (`IDTipoDoc`), 
  INDEX (`TipoDoc`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'TipoDoc'
#

# 0 records

#
# Table structure for table 'UM'
#

DROP TABLE IF EXISTS `UM`;

CREATE TABLE `UM` (
  `IDUM` INTEGER NOT NULL AUTO_INCREMENT, 
  `UnidadMedida` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  PRIMARY KEY (`IDUM`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'UM'
#

# 0 records

#
# Table structure for table 'Usuario'
#

DROP TABLE IF EXISTS `Usuario`;

CREATE TABLE `Usuario` (
  `IDUsuario` INTEGER NOT NULL AUTO_INCREMENT, 
  `Nombre` VARCHAR(255), 
  `FechaAlta` DATETIME, 
  `Nick` VARCHAR(255), 
  `Pass` VARCHAR(64), 
  `Foto` VARCHAR(255), 
  `Estado` VARCHAR(20), 
  PRIMARY KEY (`IDUsuario`)
) ENGINE=innodb DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# Dumping data for table 'Usuario'
#

# 0 records

