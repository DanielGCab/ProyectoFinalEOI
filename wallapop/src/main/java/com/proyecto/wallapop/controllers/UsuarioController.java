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

import com.proyecto.wallapop.entities.Usuario;
import com.proyecto.wallapop.services.IUsuarioService;



@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioController {
	
	@Autowired
	private IUsuarioService UsuarioService;
	
	@GetMapping("/usuarios")
	public List<Usuario> index() {
		return UsuarioService.findAll();
	}
	
	@PostMapping("/usuarios")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Valid 
			@RequestBody Usuario Usuario,
			BindingResult result) {
		
		Usuario UsuarioNew = null;
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
			UsuarioNew = UsuarioService.save(Usuario);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El Usuario ha sido creado con éxito");
		response.put("Usuario", UsuarioNew);
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.CREATED);
	
	}
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<?> show(@PathVariable Integer id) {
		Usuario Usuario = null;
		Map<String, Object> response= new HashMap<>();
		
		try {
			Usuario = UsuarioService.findById(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar la consulta en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (Usuario == null) {
			response.put("mensaje", "El Usuario ID: ".concat(id.toString().concat("  no existe en la base de datos")));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		 return new ResponseEntity<Usuario>(Usuario, HttpStatus.OK);
		
	}

	@PutMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public  ResponseEntity<?> update(
			@Valid
			@RequestBody Usuario usuario,
			BindingResult result,
			@PathVariable Integer id) {
		
		Usuario usuarioActual = UsuarioService.findById(id);
		
		Usuario usuarioUpdated = null;
		
		Map<String, Object> response= new HashMap<>();
		
		if (result.hasErrors()) {
			
			List<String> errors = result.getFieldErrors()
					.stream()
					.map(err -> "El campo '" + err.getField() +"' "+ err.getDefaultMessage())
					.collect(Collectors.toList());
		
			response.put("errors", errors);
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.BAD_REQUEST);
		}
		
		if (usuarioActual == null) {
			response.put("mensaje", "Errror no se pudo editar, el Usuario ID: ".concat(id.toString().concat("  no existe en la base de datos")));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.NOT_FOUND);
		}
		

		try {
			usuarioActual.setNombre(usuario.getNombre());
			usuarioActual.setApellidos(usuario.getApellidos());
			usuarioActual.setNick(usuario.getNick());
			usuarioActual.setEmail(usuario.getEmail());
			usuarioActual.setTelefono(usuario.getTelefono());
		
			
			usuarioUpdated = UsuarioService.save(usuarioActual);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar el Usuario en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje", "El Usuario ha sido actualizado con éxito");
		response.put("Usuario", usuarioUpdated);
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/usuarios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<?> delete(@PathVariable Integer id) {
		
		Map<String, Object> response= new HashMap<>();
		
		try {
			UsuarioService.delete(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el Usuario en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String,Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("mensaje","El Usuario ha sido elimindado con éxito");
		return new ResponseEntity<Map<String,Object>>(response, HttpStatus.OK);
		
	}

}
