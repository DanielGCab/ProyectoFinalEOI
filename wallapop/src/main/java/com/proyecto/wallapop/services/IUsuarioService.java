package com.proyecto.wallapop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.proyecto.wallapop.entities.Usuario;



public interface IUsuarioService  {
	
	public List<Usuario> findAll();
	
	public Usuario save(Usuario usuario);
	
	public Usuario findById(Integer id);
	
	public void delete(Integer id);

}
