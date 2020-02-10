package com.proyecto.wallapop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.wallapop.entities.Producto;

public interface IProducto extends JpaRepository<Producto, Long> {

}
