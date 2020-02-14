package com.proyecto.wallapop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.proyecto.wallapop.entities.Producto;



public interface IProductoService  {
	
	public List<Producto> findAll();
	
	public Producto save(Producto producto);
	
	public Producto findById(Integer id);
	
	public void delete(Integer id);

}
