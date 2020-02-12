package com.proyecto.wallapop.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.wallapop.entities.Producto;
import com.proyecto.wallapop.services.IProductoService;



@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProductoController {
	
	@Autowired
	private IProductoService ProductoService;
	
	@GetMapping("/productos")
	public List<Producto> index() {
		return ProductoService.findAll();
	}
	
	@PostMapping("/productos")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Valid 
			@RequestBody Producto Producto,
			BindingResult result) {
		
		Producto ProductoNew = null;
		Map<String, Object> response= new HashMap<>();
		
		if (result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '" + err.getField() +"' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
		
			response.put("errors", errors);
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		try {
			ProductoNew = ProductoService.save(Producto);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El Producto ha sido creado con éxito");
		response.put("Producto", ProductoNew);
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.CREATED);
	
	}
	
	@GetMapping("/productos/{id}")
	public ResponseEntity<?> show(@PathVariable Integer id) {
		Producto Producto = null;
		Map<String, Object> response= new HashMap<>();
		
		try {
			Producto = ProductoService.findById(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (Producto == null) {
			response.put("mensaje", "El Producto ID: ".concat(id.toString().concat("  no existe en la base de datos")));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		 return new ResponseEntity<Producto>(Producto, HttpStatus.OK);
		
	}

	@PutMapping("/productos/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public  ResponseEntity<?> update(
			@Valid
			@RequestBody Producto producto,
			BindingResult result,
			@PathVariable Integer id) {
		
		Producto productoActual = ProductoService.findById(id);
		
		Producto productoUpdated = null;
		
		Map<String, Object> response= new HashMap<>();
		
		if (result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '" + err.getField() +"' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
		
			response.put("errors", errors);
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		if (productoActual == null) {
			response.put("mensaje", "Errror no se pudo editar, el Producto ID: ".concat(id.toString().concat("  no existe en la base de datos")));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.NOT_FOUND);
		}
		

		try {
			productoActual.setDescripcion(producto.getDescripcion());
			productoActual.setNombre(producto.getNombre());
			productoActual.setPrecio(producto.getPrecio());
			
			productoUpdated = ProductoService.save(productoActual);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar el Producto en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El Producto ha sido actualizado con éxito");
		response.put("Producto", productoUpdated);
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/productos/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<?> delete(@PathVariable Integer id) {
		
		Map<String, Object> response= new HashMap<>();
		
		try {
			ProductoService.delete(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el Producto en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje","El Producto ha sido elimindado con éxito");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);
		
	}

}
