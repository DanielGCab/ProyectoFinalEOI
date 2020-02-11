package com.proyecto.wallapop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.proyecto.wallapop.entities.Producto;
import com.proyecto.wallapop.repositories.IProducto;

@Service
public class ProductoServiceImpl implements IProductoService {

	@Autowired
	private IProducto productoRepository;

	@Override
	public List<Producto> findAll() {
		// TODO Auto-generated method stub
		return (List<Producto>) productoRepository.findAll();
	}

	@Override
	public Producto save(Producto producto) {

		return productoRepository.save(producto);
	}

	@Override
	public Producto findById(Integer id) {
		
		return productoRepository.findById(id).orElse(null);
	}

	@Override
	public void delete(Integer id) {
		productoRepository.deleteById(id);;
		
	}


	
	
}
