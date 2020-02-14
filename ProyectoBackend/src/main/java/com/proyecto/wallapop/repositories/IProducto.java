package com.proyecto.wallapop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.proyecto.wallapop.entities.Producto;

public interface IProducto extends CrudRepository<Producto, Integer> {

}
